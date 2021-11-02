<template>
 <audio :src="source" ref="player" controls :class="$style.player" />
 <canvas :class="$style.canvas" ref="canvas" />
</template>
<script lang="ts">
import { defineComponent, inject, Ref, ref } from "@vue/runtime-core";
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
    const ctx = canvas?.value?.getContext('2d');
    const start = (index: number) => {
      if (!audios || !player.value) {
        return null;
      }
      source.value = decodeURIComponent(audios.value[index].url);
      player?.value?.play();
      const context: AudioContext = new AudioContext();
      const src: MediaElementAudioSourceNode = context.createMediaElementSource(player.value);
      const analyser: AnalyserNode = context.createAnalyser();
      src.connect(analyser);
      analyser.connect(context.destination);
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const width: number = canvas.value?.width || 0;
      const height: number = canvas.value?.height || 0;

      const barWidth = (width / bufferLength) * 2.5;
      let x = 0;

      const renderFrame = () => {
        requestIdleCallback(renderFrame);
        x = 0;
        analyser.getByteFrequencyData(dataArray);
        ctx?.fillStyle = "#000";
        ctx?.fillRect(0, 0, width, height);
      }
    }
    return { start, source, player }
  },
});
</script>
<style lang="scss" module>
  .canvas {
    width: 100%;
    height: 3.125em;
  }
  .player {
    display: none;
  }
</style>
