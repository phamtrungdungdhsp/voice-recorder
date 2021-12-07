<template>
  <div :class="$style.audioRecording">
    <div>
      <audio-icon />
    </div>

    <div :class="$style.visualizer">
      <canvas ref="canvas" />
    </div>
    <p :class="$style.duration">00:30</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, onMounted, watch } from "vue";
import AudioIcon from "../assets/icons/AudioIcon.vue";
export default defineComponent({
  components: {
    AudioIcon,
  },
  props: {
    color: { type: String },
  },
  setup(props) {
    watch(
      () => props.color,
      () => {
        drawLine();
      }
    );
    const canvas: Ref<HTMLCanvasElement | null> = ref(null);
    onMounted(() => {
      drawLine();
    });
    const drawLine = () => {
      if (canvas.value && canvas.value.getContext) {
        const ctx = canvas.value?.getContext("2d");
        const WIDTH = canvas.value.width;
        const HEIGHT = canvas.value.height;
        ctx && (ctx.strokeStyle = props.color || "#f93975");
        ctx && (ctx.lineWidth = 10);
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, HEIGHT / 2);
        ctx && ctx.lineTo(WIDTH, HEIGHT / 2);
        ctx && ctx.stroke();
      }
    };
    return { canvas, drawLine };
  },
});
</script>

<style module lang="scss">
.audioRecording {
  display: flex;
  flex-direction: row;
  column-gap: 1em;
  align-items: center;
  img {
    width: 2em;
  }
  .visualizer {
    flex: 1;
    height: 2em;

    > canvas {
      height: 100%;
      width: 100%;
      background: transparent;
    }
  }
  p.duration {
    color: currentColor;
    font-size: 0.75em;
    font-weight: 700;
  }
}
</style>