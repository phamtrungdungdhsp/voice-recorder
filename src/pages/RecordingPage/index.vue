<template>
  <div :class="$style.container">
    <section :class="$style.mainContent">
      <div :class="$style.contain">
        <div :class="$style.btnWrapper">
          <div :class="$style.shadows" />
          <div :class="$style.shadows" />
          <div :class="$style.shadows" />
          <button
            :class="`${$style.icoRecord} ${recording && $style.active}`"
            v-on:click="record"
          >
            <ast-ico-mic v-if="!recording" />
            <figure v-else />
          </button>
        </div>
        <span :class="$style.recording">
          {{ recording ? "Stop Recording" : "Click to Start Recording" }}
        </span>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";
import { ref } from "vue";
import "boxicons";
import { Router, useRouter } from "vue-router";

const AstIcoMic = defineAsyncComponent(
  () => import("assets/icons/AstIcoMic.vue")
);

export default defineComponent({
  components: {
    AstIcoMic,
  },
  setup() {
    let mediaRecorder: MediaRecorder | undefined;
    const recording = ref(false);
    const router = useRouter();

    const record = () => {
      if (!navigator?.mediaDevices?.getUserMedia) {
        alert(
          "Your browser does not support audio recording, update or switch browser"
        );
        return;
      }

      if (recording.value && mediaRecorder) {
        mediaRecorder.stop();
        mediaRecorder = undefined;
        return;
      }

      recording.value = true;

      mainRecorder(router).then((medRecorder: MediaRecorder) => {
        mediaRecorder = medRecorder;
      });
    };

    return {
      recording,
      record,
    };
  },
});

const mainRecorder = async function (router: Router): Promise<MediaRecorder> {
  const chunks: Blob[] = [];
  const recorder = navigator.mediaDevices.getUserMedia({ audio: true });
  return await recorder.then((stream) => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    mediaRecorder.ondataavailable = (event: BlobEvent) => {
      chunks.push(event.data);
    };
    mediaRecorder.onstop = () => {
      saveRecording(chunks, router);
    };
    return mediaRecorder;
  });
};

const saveRecording = (chunks: Blob[], router: Router) => {
  const blob = new Blob(chunks, { type: "audio/ogg;codecs=opus" });
  const src = URL.createObjectURL(blob);
  //Encode the URL
  const encodedSrc = encodeURIComponent(src);
  router.push(`/information/${encodedSrc}`);
};

/*export default class RecordingPage extends Vue {
  recording: boolean = false;
  mediaRecorder: MediaRecorder | null | undefined;
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
}*/
</script>
<style module lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.mainContent {
  width: 26em;
  height: 18em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-white;
  border-radius: 1em;
  box-shadow: -0.2em -0.2em 0.4em -0.1em #e3e3e3,
    0.2em 0.2em 0.4em -0.1em #d7d5d5;
}

.contain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icoRecord {
  width: 6em;
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ff039b;
  cursor: pointer;
  fill: #fff;
  padding: 1.8em;
  border: 0.2em solid #d6d6d6;
  margin-bottom: 1em;
  box-shadow: -0.2em -0.2em 0.4em -0.1em #fff, 0.2em 0.2em 0.4em -0.1em #b5b5b5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icoRecord figure {
  width: 90%;
  height: 90%;
  background-color: #fff;
  box-shadow: -0.2em -0.2em 0.4em -0.1em #fd8bd0,
    0.2em 0.2em 0.4em -0.1em #b5056f;
  border-radius: 0.5em;
}

.recording {
  font-weight: 600;
  color: #666;
}

.shadows {
}

#recording-page {
  .main-content {
    .contain {
      span.recording {
      }
      & .on {
        color: $color-pink;
      }
      & .off {
        color: $color-gray3;
      }
      .icon-record {
        .voice-button {
          width: 1.875em;
          height: 1.875em;
          color: $color-white;
        }
      }
      & .active {
        animation: pulse 1.5s infinite;
      }
      & .inactive {
        box-shadow: 0 0 0 0.25em #d0d0d0;
      }
    }
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 #d0d0d0;
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 #d0d0d0;
      box-shadow: 0 0 0 0 #d0d0d0;
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
}
</style>
