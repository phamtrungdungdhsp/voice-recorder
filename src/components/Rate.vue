<template>
  <div :class="$style.rate">
    <span
      @click="rate = 1"
      :class="rate >= 1 ? [type == 'square' ? $style.square : $style.circle, $style.active] : type == 'square' ? $style.square : $style.circle"
    ></span>
    <span
      @click="rate = 2"
      :class="rate >= 2 ? [type == 'square' ? $style.square : $style.circle, $style.active] : type == 'square' ? $style.square : $style.circle"
    ></span>
    <span
      @click="rate = 3"
      :class="rate >= 3 ? [type == 'square' ? $style.square : $style.circle, $style.active] : type == 'square' ? $style.square : $style.circle"
    ></span>
    <span
      @click="rate = 4"
      :class="rate >= 4 ? [type == 'square' ? $style.square : $style.circle, $style.active] : type == 'square' ? $style.square : $style.circle"
    ></span>
    <span
      @click="rate = 5"
      :class="rate >= 5 ? [type == 'square' ? $style.square : $style.circle, $style.active] : type == 'square' ? $style.square : $style.circle"
    ></span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  props: {
    value: { type: Number },
    type: { type: String }
  },
  setup(props) {
    const rate: Ref<number> = ref(props.value || 1);
    const getClass = (rate: number, type = props.type || 'circle') => {
      console.log(type)
      const value: Number = props.value || 1;
      return value >= rate ? ['$style.cicle', '$style.active'] : '$style.active';
    }
    return { rate, getClass };
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
      width: 1em;
      height: 1em;
      border-radius: 50%;
      background: #c4c4c4;
      cursor: pointer;
    }
    & .active {
      background: #f93975;
    }

    .square {
      width: 1em;
      height: 1em;
      background: #c4c4c4;
      cursor: pointer;
    }
    & .active {
      background: #f93975;
    }
  }
</style>