<template>
  <main :class="$style.main">
    <router-view />
  </main>
</template>
<script lang="ts" scoped>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {},
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
