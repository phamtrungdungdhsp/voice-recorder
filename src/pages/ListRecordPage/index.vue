<template>
  <div :class="$style.container">
    <section :class="$style.mainContent">
      <ul :class="$style.heading">
        <li :class="$style.f1"></li>
        <li :class="$style.f2">Name</li>
        <li :class="$style.f2">Category</li>
        <li :class="$style.f4"></li>
        <li :class="$style.f1"></li>
      </ul>
      <ul :class="$style.table">
        <li v-if="audios.length === 0" :class="$style.listNotFound">
          No record found
        </li>
        <template v-else>
          <li v-for="(item, index) in audios" :key="index">
            <list-item
              :index="index"
              :name="item.name"
              :category="item.category"
              @play="play"
              @stop="stop"
              :playing="playing"
              :player="player"
            />
          </li>
        </template>
      </ul>
    </section>
    <div
      :class="$style.newRecord"
      @click="$router.push({ name: 'RecordingPage' })"
    >
      <div :class="$style.icoRecord">
        <ast-ico-mic />
      </div>
      <span>New Recording</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, inject, ref, Ref } from "vue";
import { AudioSource, AUDIO_PROVIDER_GET } from "store";
import ListItem from "./ListItem.vue";
import { useRouter } from "vue-router";
const AstIcoMic = defineAsyncComponent(
  () => import("assets/icons/AstIcoMic.vue")
);
//Use composition not classes
export default defineComponent({
  components: {
    ListItem,
    AstIcoMic,
  },
  setup() {
    const audios: Ref<AudioSource[]> | undefined = inject(AUDIO_PROVIDER_GET);
    const playing = ref(-1);
    const source: Ref<undefined | string> = ref();
    const player: Ref<HTMLMediaElement | undefined> = ref();
    const dataArray: Ref<Uint8Array | undefined> = ref();
    const router = useRouter();

    //Take user to main screen if no audios

    if (!audios || audios.value.length === 0) {
      router.push("/");
    }
    const stop = async () => {
      await player.value?.pause();
      player.value?.remove();
      player.value = undefined;
      playing.value = -1;
    }
    const play = async (index: number) => {
      if (!audios?.value.length) {
        return;
      }
      console.log("about to play");
      await stop();
      player.value = new Audio(audios.value[index].url);
      playing.value = index;
      await player.value.load();
      await player.value.play();
      player.value.addEventListener('ended', stop);
    };
    return {
      audios,
      source,
      play,
      stop,
      playing,
      player,
      dataArray
    };
  },
});

/*
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
  display: grid;
  row-gap: 0.4em;
  border-radius: 1em;
  background: #fff;
  box-shadow: -0.2em -0.2em 0.4em -0.1em #f3f1f1,
    0.2em 0.2em 0.4em -0.1em #dddddd;
  overflow: hidden;
  max-height: calc(100vh - 4em);
}

.player {
  display: none;
}

.heading {
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  width: 50em;

  @for $i from 1 through 4 {
    .f#{$i} {
      flex: #{$i}
    }
  }
}
.table > li > ul {
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  width: 50em;
}

.heading {
  padding: 1em 0.5em;
  border-bottom: 0.25em solid #eee;
  font-weight: 600;
  color: #000;
}

.heading li,
.table > li > ul > li {
  width: 100%;
  padding: 0 0.5em;
  text-align: left;
  line-height: 1.8;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:first-child,
  .last-child {
    width: 3em;
    text-align: right;
  }
  &::first-letter {
    text-transform: capitalize;
    font-size: 1.1em;
  }
}

.table > li {
  width: 100%;
  text-align: center;
}

.table > li > ul {
  border-bottom: 1px solid #f5f5f5;
  color: #444;
}

.table > li:last-child > ul {
  border: 0;
}

.table {
  width: 50em;
  max-width: 100%;
  background: $color-white;
  max-height: calc(100vh - 10em);
  overflow: auto;
  margin-bottom: 0.5em;
}

.icoRecord {
  width: 4.375em;
  height: 4.375em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 1.4em;
  fill: #fff;
  background: $color-pink;
  box-shadow: 0 0 0 0.25em #d0d0d0;
  margin-bottom: 0.5em;
}

.newRecord {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25em;
  .icon-record {
    cursor: pointer;
    .voice-button {
      width: 1.875em;
      height: 1.875em;
      color: $color-white;
    }
  }
}
</style>
