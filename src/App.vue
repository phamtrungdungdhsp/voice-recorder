<template>
  <audio-source-provider>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>
