<template>
  <ul :class="$style.wrapper">
    <li :class="$style.f1">
      <div class="show-index">{{ index + 1 }}</div>
    </li>
    <li :class="$style.f2">{{ name }}</li>
    <li :class="$style.f2">{{ category }}</li>
    <li :class="$style.f4">
      <wave-visualisation
        :data="data"
        :index="index"
        :playing="playing"
        :player="player"
      />
    </li>
    <li :class="$style.f1">
      <div :class="$style.buttonCircle" type="button" v-if="playing !== index"  @click="play">
        <ast-ico-play />
      </div>
      <div :class="$style.buttonCircle" type="button" v-else  @click="stop">
        stop
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent  } from "@vue/runtime-core";
import WaveVisualisation from "./WaveVisualisation.vue";
const AstIcoPlay = defineAsyncComponent(
  () => import("assets/icons/AstIcoPlay.vue")
);

export default defineComponent({
  components: {
    WaveVisualisation,
    AstIcoPlay,
  },
  emits: ["play", "stop"],
  props: {
    index: Number,
    name: String,
    category: String,
    playing: Number,
    data: Uint8Array,
    player: HTMLMediaElement
  },
  
  setup(props, context) {
    const play = () => {
      context.emit("play", props.index);
    };
    const stop = () => {
      context.emit("stop");
    }
    return { play, stop };
  },
});
</script>
<style lang="scss" module>
.buttonCircle {
  position: relative;
  width: 2em;
  height: 2em;
  margin: 0 0 0 auto;
}

.wrapper {
  padding: 0.25em 0;
  fill: $color-pink;
  transition: color 0.1s, background-color 0.1s;
  cursor: pointer;
  // &:hover {
  //   background-color: $color-pink;
  //   color: #fff;
  //   fill: #fff;
  // }
  @for $i from 1 through 4 {
    .f#{$i} {
      flex: #{$i}
    }
  }
}
</style>
