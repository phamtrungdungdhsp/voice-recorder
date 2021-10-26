<template>
  <router-view/>
</template>
<script lang="ts" scoped>
import { setup, Vue } from 'vue-class-component';
import { initStore } from './store';
export default class App extends Vue {
  store: any = setup(() => initStore())
}

</script>
