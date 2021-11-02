<template>
  <audio :src="source" ref="player" controls :class="$style.player" />
  <canvas :class="$style.canvas" ref="canvas" controls />
</template>
<script lang="ts">
import { defineComponent, inject, Ref, ref, onMounted } from "@vue/runtime-core";
import { AudioSource, AUDIO_PROVIDER_GET } from "store";

export default defineComponent({
  props: {
    index: Number
  },
  setup(props) {
    const audios: Ref<AudioSource[]> | undefined = inject(AUDIO_PROVIDER_GET);
    const source: Ref<string | undefined> = ref(audios?.value[props?.index || 0].url);
    const player: Ref<HTMLMediaElement | undefined> = ref();
    const canvas: Ref<HTMLCanvasElement | undefined> = ref();
    let ctx: CanvasRenderingContext2D | null | undefined;
    onMounted(() => {
      ctx = canvas?.value?.getContext('2d');
    })
    const start = (index: number) => {
      if (!audios || !player.value || !ctx || !canvas.value) {
        return null;
      }
      source.value = decodeURIComponent(audios.value[index].url);
      player.value.load();
      player.value.play();
      const context: AudioContext = new AudioContext();
      const src: MediaElementAudioSourceNode = context.createMediaElementSource(player.value);
      const distortion = context.createWaveShaper();
      const analyser: AnalyserNode = context.createAnalyser();
      src.connect(analyser);
      analyser.connect(distortion);
      distortion.connect(context.destination);
      console.log(player.value.paused);
      analyser.fftSize = 256;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const WIDTH = canvas.value.width;
      const HEIGHT = canvas.value.height;
      
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      function renderFrame () {
        if (!ctx) { return ; }
        const request = requestAnimationFrame(renderFrame);
        console.log('go hre', player?.value?.paused)

        analyser.getByteFrequencyData(dataArray);
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        let barWidth: number = (WIDTH / bufferLength) * 1.5;
        let barHeight: number;
        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] / 2;
          ctx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
          ctx.fillRect(x, HEIGHT-barHeight / 2 ,barWidth,barHeight);
          x += barWidth + 1;
        }
        if (player.value?.paused) {
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, WIDTH, HEIGHT);
          cancelAnimationFrame(request);
        }
      }
      player.value.play();
      renderFrame();
    }
    return { start, source, player, canvas }
  }
});
</script>10.7421875, 107.421875, 50
<style lang="scss" module>
.canvas {
  width: 100%;
  height: 3.125em;
}
.player {
  display: none;
}
</style>
