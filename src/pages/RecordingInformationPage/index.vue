<template>
  <div class="container" id="recording-information-page">
    <section class="main-content">
      <form class="form" @submit="onSubmit">
        <div>
          <img src="../../assets/voice.svg" class="logo" alt="">
        </div>
        <h2 class="title">Recording Information</h2>
        <input type="text" v-model="name" class="form-control" placeholder="Name of Recording"/>
        <input type="text" v-model="category" class="form-control" placeholder="Audio Category"/>
        <div>
          <button type="submit" :disabled="!name || !category" class="button">Save Recording</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Action } from 'vuex-class';
export default class RecordingInformationPage extends Vue {
  @Action('updateUrl') updateUrl: any
  name: string = '';
  category: string = '';
  id: number = 1;

  mounted () {
    const { id: urlId } = this.$route.params;
    if (!Number.isInteger(+urlId) || +urlId < 1) {
      return alert('Invalid id')
    }
    this.id = +urlId;
  }
  async onSubmit (e: Event) {
    e.preventDefault();
    await this.updateUrl({ id: this.id, payload: { name: this.name, category: this.category } })
    this.$router.push({ name: 'List' })
  }
}
</script>
<style scoped lang="scss" src="./style.scss"></style>
