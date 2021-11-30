<template>
  <div :class="$style.progress" :style="`background-image: linear-gradient(to right, #f93975 ${percent || 0}%, #c4c4c4 0%)`"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    percent: { type: Number }
  },
  setup() {},
});
</script>

<style module lang="scss">
  .progress {
    width: 100%;
    height: 10px;
    background: #C4C4C4;
    border-radius: 0.25em;
    transition: ease-in 1s;
    gap: 1em;
  }
</style>
