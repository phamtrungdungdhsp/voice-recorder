<template>
  <div class="container" id="recording-page">
    <section class="main-content">
      <div class="contain">
        <div :class="!recording ? 'icon-record inactive' : 'icon-record active'" v-on:click="switchRecording">
          <box-icon v-if="!recording" name="microphone" color="#fff" size="md" />
          <box-icon v-else name="square" color="#fff" size="md" type="solid" />
        </div>
        <span v-if="!recording" class="recording off">Click to Start Recording</span>
        <span v-else class="recording on">Stop Recording</span>
      </div>
    </section>
  </div>
</template>

<script lang="ts" scoped>
import { Vue, setup } from 'vue-class-component';
import { useStore } from '@/store';

export default class RecordingPage extends Vue {
  recording: boolean = false;
  mediaRecorder: MediaRecorder|null|undefined;
  action: any = setup(() => {
    const store = useStore();
    const createUrl = store.createUrl;
    return { createUrl }
  })

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
    const id: number = this.action.createUrl(audioUrl);
    this.$router.push({ name: 'RecordingInformation', params: { id } })
  }
}
</script>
<style scoped lang="scss" src="./style.scss"></style>
