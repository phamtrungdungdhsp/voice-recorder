<template>
  <div :class="$style.rate" :style="`color: ${color}`">
    <span
      @click="changeRate(1)"
      :class="
        rate >= 1
          ? [type == 'square' ? $style.square : $style.circle, $style.active]
          : type == 'square'
          ? $style.square
          : $style.circle
      "
    ></span>
    <span
      @click="changeRate(2)"
      :class="
        rate >= 2
          ? [type == 'square' ? $style.square : $style.circle, $style.active]
          : type == 'square'
          ? $style.square
          : $style.circle
      "
    ></span>
    <span
      @click="changeRate(3)"
      :class="
        rate >= 3
          ? [type == 'square' ? $style.square : $style.circle, $style.active]
          : type == 'square'
          ? $style.square
          : $style.circle
      "
    ></span>
    <span
      @click="changeRate(4)"
      :class="
        rate >= 4
          ? [type == 'square' ? $style.square : $style.circle, $style.active]
          : type == 'square'
          ? $style.square
          : $style.circle
      "
    ></span>
    <span
      @click="changeRate(5)"
      :class="
        rate >= 5
          ? [type == 'square' ? $style.square : $style.circle, $style.active]
          : type == 'square'
          ? $style.square
          : $style.circle
      "
    ></span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
export default defineComponent({
  props: {
    value: { type: Number },
    type: { type: String },
    color: { type: String }
  },
  emits: ['onChangeRate'],
  setup(props, { emit }) {
    const rate: Ref<number> = ref(props.value || 1);
    const changeRate = (value: number) => {
      rate.value = value;
      emit('onChangeRate', rate.value);
    }
    return { rate, changeRate };
  },
});
</script>

<style module lang="scss">
.rate {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 0.5em;
  .circle {
    width: 0.875em;
    height: 0.875em;
    border-radius: 50%;
    background: #c4c4c4;
    cursor: pointer;
  }
  & .active {
    background: #f93975;
  }
  .square {
    width: 0.875em;
    height: 0.875em;
    background: #c4c4c4;
    cursor: pointer;
  }
  & .active {
    background: currentColor;
  }
}
</style>