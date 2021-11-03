<template>
 <canvas :class="$style.canvas" ref="canvas" />
</template>
<script lang="ts">
import { defineComponent, ref, Ref, onMounted, toRefs, watch } from "@vue/runtime-core";

export default defineComponent({
  props: {
    data: Uint8Array,
    index: Number,
    playing: Number,
    player: HTMLMediaElement
  },
  setup(props) {
    const canvas: Ref<HTMLCanvasElement | undefined> = ref();
    const { playing } = toRefs(props);
    let audioSource: MediaElementAudioSourceNode|null;
    let drawVisualizer: number;
    const onPlay = () => {
      if (!props.player) { return ; }
      const audioCtx: AudioContext = new AudioContext();
      const analyser: AnalyserNode = audioCtx.createAnalyser();
      const distortion: WaveShaperNode = audioCtx.createWaveShaper();
      audioSource = audioCtx.createMediaElementSource(props.player);
      audioSource.connect(analyser);
      analyser.connect(distortion);
      distortion.connect(audioCtx.destination);
      analyser.fftSize = 256;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const render = () => {
        drawVisualizer = requestAnimationFrame(render);
        analyser.getByteFrequencyData(dataArray);
        draw('red', dataArray);
      }
      render();
    }
    const draw = (color: string, dataArray: Uint8Array) => {
      if (!canvas.value) { return ; }
      const ctx: CanvasRenderingContext2D | null = canvas.value.getContext('2d');
      if (!ctx) { return ; }
      const WIDTH: number = canvas.value.width;
      const HEIGHT: number = canvas.value.height;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = color;
     
      let currx: number = 0;
      for (let i = 0; i < dataArray.length; i++) {
        const barHeight = dataArray[i];
        ctx.fillRect(currx, (HEIGHT/2) - (barHeight / 2), 2, barHeight);
        currx+=4;
      }
    }
    const initDraw = () => {
      const value: number[] = []
      for (let i = 0; i < 100 ; i++) {
        value.push(75);
        value.push(150);
      }
      draw('#d8d8d8d8', new Uint8Array(value));
    }
    onMounted(() => initDraw());
    watch(playing, () => {
      if (props.index === props.playing) {
        console.log(props.index, props.playing)
        onPlay()
      } else {
        cancelAnimationFrame(drawVisualizer);
        initDraw();
      }
    });
    return { canvas }
  },
});
</script>
<style lang="scss" module>
  .canvas {
    width: 100%;
    height: 3.125em;
    background: #fff;
  }
  .player {
    display: none;
  }
</style>
