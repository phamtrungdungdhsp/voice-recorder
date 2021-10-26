<template>
  <div class="container" id="history">
    <section class="main-content">
      <audio :src="source" controls class="audio-player" ref="audio"/>
      <table class="table header">
        <thead>
          <th style="width: 10%"></th>
          <th style="width: 30%">Name</th>
          <th style="width: 30%">Category</th>
          <th style="width: 30%"></th>
        </thead>
      </table>
      <table class="table body">
        <tbody>
          <tr v-if="data.list.length === 0">
            <td colspan="4">No record found</td>
          </tr>
        </tbody>
        <tbody v-if="data.list.length > 0">
          <tr v-for="(item, index) in data.list" v-bind:key="item.item">
            <td style="width: 10%"><div class="show-index">{{ index + 1 }}</div></td>
            <td tyle="width: 30%">{{ item.name }}</td>
            <td tyle="width: 30%">{{ item.category }}</td>
            <td tyle="width: 30%">
              <div class="button-circle" v-if="playing !== index" type="button" @click="changeUrl(index, item.url)">
                <box-icon name="play-circle" type="logo" color="#eb1395" size="md"/>
              </div>
              <div class="button-circle" v-if="playing === index" type="button" @click="stopAudio">
                <box-icon name="stop-circle" type="logo" color="#eb1395" size="md"/>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <div class="new-record" @click="$router.push({ name: 'RecordingPage' })">
      <div class="icon-record">
         <box-icon v-if="!recording" name="microphone" color="#fff" size="md" />
      </div>
      <span>New Recording</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { Vue, setup } from "vue-class-component";
import { useStore } from '@/store';

export default class HistoryPage extends Vue {
  declare $refs: {
    audio: HTMLMediaElement
  }
  audio: any;
  playing: number = -1;
  source: string = '';
  data: any = setup(() => {
    const store: any = useStore();
    const list = computed(() => store.getList.value)
    return { list: list.value || [] }
  })

  changeUrl (index: number, url: string): void {
    this.source = url;
    this.playing = index;
    this.$refs.audio.currentTime = 0;
    this.$refs.audio.play();
    this.$refs.audio.addEventListener('ended', () => this.stopAudio());
  }
  
  stopAudio () {
    this.$refs.audio.pause();
    this.$refs.audio.currentTime = 0;
    this.playing = -1;
  }
}
</script>
<style scoped lang="scss" src="./style.scss"></style>
