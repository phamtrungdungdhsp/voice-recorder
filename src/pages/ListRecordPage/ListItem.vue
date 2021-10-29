<template>
  <ul :class="$style.wrapper" @click="play">
    <li>
      <div class="show-index">{{ index + 1 }}</div>
    </li>
    <li>{{ name }}</li>
    <li>{{ category }}</li>
    <li>
      <div :class="$style.buttonCircle" type="button">
        <ast-ico-play />
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";
const AstIcoPlay = defineAsyncComponent(
  () => import("assets/icons/AstIcoPlay.vue")
);

export default defineComponent({
  components: {
    AstIcoPlay,
  },
  emits: ["play"],
  props: {
    index: Number,
    name: String,
    category: String,
  },
  setup(props, context) {
    const play = () => {
      context.emit("play", props.index);
    };
    return {
      play,
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
  &:hover {
    background-color: $color-pink;
    color: #fff;
    fill: #fff;
  }
}
</style>
