<template>
  <ul :class="$style.wrapper" @click="play">
    <li :class="$style.f1">
      <div class="show-index">{{ index + 1 }}</div>
    </li>
    <li :class="$style.f2">{{ name }}</li>
    <li :class="$style.f2">{{ category }}</li>
    <li :class="$style.f4">
      <wave-visualisation ref="visualisation" :index="index"/>
    </li>
    <li :class="$style.f1">
      <div :class="$style.buttonCircle" type="button">
        <ast-ico-play />
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from "@vue/runtime-core";
import WaveVisualisation from "./WaveVisualisation.vue";
const AstIcoPlay = defineAsyncComponent(
  () => import("assets/icons/AstIcoPlay.vue")
);

export default defineComponent({
  components: {
    WaveVisualisation,
    AstIcoPlay,
  },
  // emits: ["play"],
  props: {
    index: Number,
    name: String,
    category: String
  },
  setup(props) {
    const visualisation = ref();
    const play = () => {
      visualisation.value.start(props?.index);
    };
    return {
      play,
      visualisation
    };
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
