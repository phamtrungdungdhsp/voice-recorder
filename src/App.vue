<template>
  <audio-source-provider>
    <div :class="$style.deco" />
    <main :class="$style.main">
      <router-view />
    </main>
  </audio-source-provider>
</template>
<script lang="ts" scoped>
import { defineComponent } from "@vue/runtime-core";
import AudioSourceProvider from "store/audio";

export default defineComponent({
  components: {
    AudioSourceProvider,
  },
});
</script>
<style lang="scss" module>
.main {
  position: relative;
  z-index: 3;
}
.deco::before,
.deco::after {
  height: 100%;
  width: 100%;
  position: fixed;
  left: calc(50% - 4em);
  transform: skewX(-20deg);
  width: 100%;
  height: 100%;
  position: fixed;
  content: "";
  background: #f6f6f6;
  transform: skewX(-20deg);
}

.deco::after {
  left: calc(50% + 3em);
  background-color: #e5e5e5;
}
</style>
