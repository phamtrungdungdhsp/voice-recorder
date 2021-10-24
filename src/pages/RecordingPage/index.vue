<template>
  <div class="container" id="recording-page">
    <section class="main-content">
      <div class="contain">
        <div :class="!recording ? 'icon-record' : 'icon-record active'" v-on:click="switchRecording">
          <img v-if="!recording" class="voice-button" src="../../assets/voice.svg"/>
          <img v-else class="voice-button" src="../../assets/stop-button.svg"/>
        </div>
        <span v-if="!recording">Click to Start Recording</span>
        <span v-else class="recording">Stop Recording</span>
      </div>
    </section>
  </div>
</template>

<script lang="ts" scoped>
import { Vue } from 'vue-class-component';
import { Action } from 'vuex-class';

export default class RecordingPage extends Vue {
  @Action('addUrl') addUrl: any;
  recording: boolean = false;
  mediaRecorder: MediaRecorder|null|undefined;
  mounted () {
    this.onSaveRecording.bind(this)
  }
  switchRecording () {
    if (navigator?.mediaDevices?.getUserMedia) {
      this.recording = !this.recording;
      if (this.recording) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
          .then(stream => this.onStartRecording(stream))
          .catch(() => alert('Unexpected occurs!'))
      } else {
        this.onStopRecording()
      }
    } else {
      alert('Your browser is not suppoprted')
    }
    
  }

  onStartRecording (stream: MediaStream): void {
    this.mediaRecorder = new MediaRecorder(stream);
    this.mediaRecorder.start();
    const chunks: any = [];
    this.mediaRecorder.onstop = () => {
      this.onSaveRecording(chunks);
      console.log(stream.getAudioTracks())
      stream.getAudioTracks()[0].enabled = false;
    };
    this.mediaRecorder.ondataavailable = (event: BlobEvent): void => {
      chunks.push(event.data);
    }
  }

  onStopRecording (): void {
    this.mediaRecorder?.stop();
    
  }

  async onSaveRecording (chunks: any) {
    const blob: Blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    const audioUrl: string = window.URL.createObjectURL(blob);
    const id: number = await this.addUrl({
      url: audioUrl,
      name: 'No name',
      category: 'No category'
    })
    this.$router.push({ name: 'RecordingInformation', params: { id } })
  }
}
</script>
<style scoped lang="scss" src="./style.scss"></style>
