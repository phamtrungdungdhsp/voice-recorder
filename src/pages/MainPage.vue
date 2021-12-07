<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <section :class="$style.section1">
        <h2>Pick your favorite CV Template!</h2>
        <button type="button">Next</button>
      </section>
      <section :class="$style.section2">
        <ul :class="$style.tabs">
          <li
            @click="tab = tabs.textCV"
            :class="
              tab === tabs.textCV ? [$style.tab, $style.active] : $style.tab
            "
          >
            Text CV
          </li>
          <li
            @click="tab = tabs.videoCV"
            :class="
              tab === tabs.videoCV ? [$style.tab, $style.active] : $style.tab
            "
          >
            Video CV
          </li>
          <li
            @click="tab = tabs.soundCV"
            :class="
              tab === tabs.soundCV ? [$style.tab, $style.active] : $style.tab
            "
          >
            Sound CV
          </li>
                    <li
            @click="tab = tabs.mixedCV"
            :class="
              tab === tabs.mixedCV ? [$style.tab, $style.active] : $style.tab
            "
          >
            Mixed Media CV
          </li>
        </ul>
      </section>
      <TextCV v-if="tab === tabs.textCV" themeColor="#f93975"/>
      <VideoCV v-if="tab === tabs.videoCV" themeColor="#f93975"/>
      <SoundCV v-if="tab === tabs.soundCV" themeColor="#f93975"/>
      <MixedMediaCV v-if="tab === tabs.mixedCV" themeColor="#f93975"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import TextCV from "../components/cv/TextCV.vue";
import VideoCV from "../components/cv/VideoCV.vue";
import SoundCV from "../components/cv/SoundCV.vue";
import MixedMediaCV from "../components/cv/MixedMediaCV.vue";

export default defineComponent({
  components: {
    TextCV,
    VideoCV,
    SoundCV,
    MixedMediaCV
  },
  setup() {
    const tabs = ref({
      textCV: 'text_cv',
      videoCV: 'video_cv',
      soundCV: 'sound_cv',
      mixedCV: 'mixed_cv'
    })
    const tab: Ref<string> = ref("video_cv");
    return { tabs, tab };
  },
});
</script>
<style module lang="scss">
.wrapper {
  width: 60em;
  margin: 2em;
  .container {
    padding: 2em;
    background: #fff;
    border-radius: 1.125em;
    .section1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      h2 {
        font-size: 2em;
        font-weight: 900;
        color: #f93975;
      }
      button {
        background: #f93975;
        padding: 0.75em 3em;
        color: #fff;
        font-weight: 500;
        font-size: 0.876em;
        border-radius: 0.25em;
      }
    }
    .section2 {
      margin-top: 3em;
      .tabs {
        margin-bottom: 2em;
        display: flex;
        flex-direction: row;
        column-gap: 1em;
        flex-wrap: nowrap;
        justify-content: center;
        font-weight: 500;
        color: #919090;
        .tab {
          cursor: pointer;
          position: relative;
        }
        & ::after {
          content: "";
          position: absolute;
          height: 2px;
          width: 0%;
          bottom: -0.25em;
          right: 50%;
          background: #f93975;
          transition: all 1s;
        }
        & ::before {
          content: "";
          position: absolute;
          height: 2px;
          width: 0%;
          bottom: -0.25em;
          left: 50%;
          background: #f93975;
          transition: all 1s;
        }
        & :hover {
          color: #f93975;
        }
        & :hover::after {
          width: 50%;
        }
        & :hover::before {
          width: 50%;
        }
        & .active {
          color: #f93975;
        }
        & .active::before {
          width: 50%;
        }
        & .active::after {
          width: 50%;
        }
      }
    }
  }
}
</style>