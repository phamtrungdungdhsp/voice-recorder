<template>
  <div class="container" id="history">
    <section class="main-content">
      <table class="table">
        <thead>
          <th>STT</th>
          <th>Name</th>
          <th>Category</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-if="history.length === 0">
            <td colspan="4">No record found</td>
          </tr>
        </tbody>
        <tbody v-if="history.length > 0">
          <tr v-for="(item, index) in history" v-bind:key="item.item">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.category }}</td>
            <td>
              <button class="button play" v-if="playing !== index" type="button" @click="changeUrl(index, item.url)">Play</button>
              <button class="button stop" v-if="playing === index" type="button" @click="stopAudio">Stop</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <div class="new-record" @click="$router.push({ name: 'RecordingPage' })">
      <div class="icon-record">
        <img class="voice-button" src="../../assets/voice.svg" alt="">
      </div>
      <span>New Recording</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { State } from 'vuex-class';

export default class HistoryPage extends Vue {
  audio: any;
  playing: number = -1;
  source: string = '';
  @State('audioUrls') history: any;

  changeUrl (index: number, url: string): void {
    this.source = url;
    this.audio = new Audio(url);
    this.audio.play();
    this.playing = index;
    this.audio.addEventListener('ended', () => this.stopAudio());
  }
  
  stopAudio () {
    this.audio.pause();
    this.audio.currentTime = 0
    this.playing = -1;
  }
}
</script>
<style scoped lang="scss" src="./style.scss"></style>
