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
            @click="tab = 'cv_design'"
            :class="
              tab === 'cv_design' ? [$style.tab, $style.active] : $style.tab
            "
          >
            CV Design
          </li>
          <li
            @click="tab = 'video_cv'"
            :class="
              tab === 'video_cv' ? [$style.tab, $style.active] : $style.tab
            "
          >
            Video CV
          </li>
          <li
            @click="tab = 'voice_cv'"
            :class="
              tab === 'voice_cv' ? [$style.tab, $style.active] : $style.tab
            "
          >
            Voice Recording CV
          </li>
        </ul>
        <div :class="$style.listCv">
          <div :class="$style.list" v-if="tab === 'cv_design'">
            <div :class="$style.item">
              <img src="~@/assets/images/cv.png" alt="" />
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/cv.png" alt="" />
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/cv.png" alt="" />
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/cv.png" alt="" />
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/cv.png" alt="" />
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/cv.png" alt="" />
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
            </div>
          </div>
        </div>
        <div :class="$style.videoCv" v-if="tab === 'video_cv'">
          <div :class="$style.listVideo">
            <div :class="$style.item">
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
              <div :class="$style.video"></div>
            </div>
            <div :class="$style.item">
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
              <div :class="$style.video"></div>
            </div>
            <div :class="$style.item">
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
              <div :class="$style.video"></div>
            </div>
            <div :class="$style.item">
              <p :class="$style.title">Option 1</p>
              <p :class="$style.description">Create a professional CV.</p>
              <div :class="$style.video"></div>
            </div>
          </div>
          <div :class="$style.buttonUpload">
            <p>Upload your Video</p>
            <button>Click here to upload your video</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  setup() {
    const tab: Ref<string> = ref("video_cv");
    return { tab };
  },
});
</script>
<style module lang="scss">
.wrapper {
  width: 60em;
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
      .listCv {
        .list {
          animation: showUp 2s;
          display: flex;
          row-gap: 3em;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;

          .item {
            img {
              width: 18em;
            }
            .title {
              font-size: 1em;
              font-weight: 700;
              color: #f93975;
            }
            .description {
              font-size: 0.875em;
              color: #919090;
            }
          }
        }
      }

      .videoCv {
        animation: showUp 2s;
        .listVideo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1em;
          .item {
            .title {
              font-size: 1em;
              font-weight: 700;
              color: #f93975;
            }
            .description {
              font-size: 0.875em;
              color: #919090;
              margin-bottom: 1em;
            }
            .video {
              width: 100%;
              height: 15em;
              background: #999a9f;
              border-radius: 0.5em;
            }
          }
        }

        .buttonUpload {
          text-align: center;
          margin-top: 4em;
          font-size: 0.875em;
          font-weight: 450;
          p {
            color: #999a9f;
            margin-bottom: 0.5em;
          }
          button {
            padding: 1em 6em;
            background: #f93975;
            color: #fff;
            border-radius: 0.25em;
          }
        }
      }
    }
  }
}
@keyframes showUp {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
