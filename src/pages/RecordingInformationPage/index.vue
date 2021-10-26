<template>
  <div class="container" id="recording-information-page">
    <section class="main-content">
      <form class="form" @submit="onSubmit">
        <div>
          <box-icon name="microphone" color="#808080" size="md" />
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
import { Vue, setup } from "vue-class-component";
import { useStore } from '@/store';
import 'boxicons';
export default class RecordingInformationPage extends Vue {
  name: string = '';
  category: string = '';
  id: number = 1;
  action: any = setup(() => {
    const store = useStore();
    return { updateUrl: store.updateUrl };
  });

  mounted () {
    const { id: urlId } = this.$route.params;
    if (!Number.isInteger(+urlId) || +urlId < 1) {
      return alert('Invalid id')
    }
    this.id = +urlId;
  }
  async onSubmit (e: Event) {
    e.preventDefault();
    this.action.updateUrl(this.id, this.name, this.category);
    this.$router.push({ name: 'List' })
  }
}
</script>
<style scoped lang="scss" src="./style.scss"></style>
