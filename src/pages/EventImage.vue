<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <!-- section 1 -->
      <div :class="[$style.section, $style.section1]">
        <!-- title  -->
        <div :class="$style.mainTitle">
          <h1>Main Event Image.</h1>
          <p>
            This is the first image attendees will see at the top of your
            listing. <br />
            Use a high quality image: 2160x1080px (2:1 ratio).
          </p>
        </div>
        <!-- image -->
        <div :class="$style.uploadZone">
          <div :class="$style.tabs">
            <p
              @click="setTab(1)"
              :class="{ [$style.active]: currentTab === 1 }"
            >
              Stock Images
            </p>
            <p
              @click="setTab(2)"
              :class="{ [$style.active]: currentTab === 2 }"
            >
              Upload Images
            </p>
          </div>
        </div>
        <div :class="$style.selectZone" v-if="currentTab === 1">
          <div :class="$style.categories">
            <p :class="$style.active">Music</p>
            <p>Workshop</p>
            <p>Online Class</p>
            <p>Course</p>
          </div>
          <div :class="$style.images">
            <div :class="$style.contain">
              <img src="~@/assets/images/category.png" alt="Category" />
            </div>
            <div :class="$style.contain">
              <img src="~@/assets/images/category.png" alt="Category" />
            </div>
            <div :class="$style.contain">
              <img src="~@/assets/images/category.png" alt="Category" />
            </div>
            <div :class="$style.contain">
              <img src="~@/assets/images/category.png" alt="Category" />
            </div>
            <div :class="$style.contain">
              <img src="~@/assets/images/category.png" alt="Category" />
            </div>
          </div>
        </div>
        <drag-drop v-if="currentTab === 2" />
      </div>
      <hr :class="$style.hrTag" />
      <!-- section 2 -->
      <div :class="[$style.section, $style.section2]">
        <div :class="$style.mainTitle">
          <h1>Description About Your Event</h1>
          <p>
            Add more details to your event like your schedule, sponsors or
            featured guests.
          </p>
        </div>
        <div :class="$style.summary">
          <label for="">Summary</label>
          <input
            type="text"
            placeholder="Write a short event summary to get attendees excited"
          />
        </div>
        <div :class="$style.summary">
          <label for="">Description</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="Write a description event summary to get attendees excited"
          ></textarea>
        </div>
        <div :class="$style.listButton">
          <button type="button">Add text</button>
          <button type="button">Add Image</button>
          <button type="button">Add Video Link</button>
        </div>
        <div :class="$style.submit">
          <button type="button">Discard Event</button>
          <button type="button" :class="$style.save">Save & Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script  lang="ts">
import { defineComponent, ref, Ref } from "vue";
import DragDrop from "../components/DragDrop.vue";
export default defineComponent({
  components: {
    DragDrop,
  },
  setup() {
    let currentTab: Ref<number> = ref(1);
    const setTab = (value: number): void => {
      currentTab.value = value;
    };
    return { currentTab, setTab };
  },
});
</script>

<style module lang="scss">
.wrapper {
  max-width: 60em;
  min-width: 60em;
  background: $color-gray1;
  padding: 2em 0;
  margin: 2em;
  border-radius: 1.25em;
  .hrTag {
    height: 1px;
    margin: 0 4em;
    background: #a5a5a5;
    opacity: 0.3;
  }
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2.75em;

    .mainTitle {
      display: flex;
      flex-direction: column;

      h1 {
        color: $color-pink;
        font-size: 2.5em;
        font-weight: 900;
      }

      p {
        color: $color-gray5;
        opacity: 0.5;
        font-size: 0.875em;
        font-weight: 500;
      }
    }

    .section {
      display: flex;
      flex-direction: column;
      padding: 0 4em;
      row-gap: 1.875em;
    }

    .section1 {
      .uploadZone {
        display: flex;
        flex-direction: column;
        gap: 1em;
        .tabs {
          display: flex;
          flex-direction: row;
          gap: 1em;
          cursor: pointer;

          p {
            font-size: 1em;
            color: $color-gray5;
            opacity: 0.5;
          }
          & .active {
            opacity: 1;
            color: $color-pink;
          }
        }
      }
    }

    .section2 {
      .summary {
        display: flex;
        flex-direction: column;
        border: 1px solid $color-pink;
        background: #fff;
        row-gap: 1em;
        padding: 1em;
        label {
          font-size: 0.875em;
          color: $color-gray5;
          opacity: 0.3;
        }

        input,
        textarea {
          outline: none;
          width: 100%;
          color: #171717;
          opacity: 0.5;
        }
      }

      .listButton {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2em;

        button {
          padding: 1em 3em;
          border: 1px solid $color-pink;
          font-weight: 550;
          color: #171717;
          opacity: 0.5;
        }
      }

      .submit {
        display: flex;
        flex-direction: row;
        gap: 1em;
        width: 100%;
        justify-content: center;
        margin: 2em 0 0;

        button {
          padding: 0.5em;
          border: none;
          border-radius: 0.25em;
          color: #fff;
          background: #d2d2d2;
        }
        .save {
          background: $color-pink;
        }
      }
    }

    .selectZone {
      display: flex;
      flex-direction: row;
      gap: 1em;
      border: 1px solid $color-pink;
      border-radius: 0.25em;
      padding: 1em;
      height: 16em;

      .categories {
        display: flex;
        flex-direction: column;
        row-gap: 1em;

        p {
          text-align: left;
          border-radius: 1.75em;
          padding: 0.5em 1em;
          white-space: nowrap;
        }
        & .active {
          background: $color-pink;
        }
      }

      .images {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75em;
        overflow-y: auto;
        padding: 0 0.5em;

        .contain {
          img {
            width: 100%;
          }
        }
      }
      & ::-webkit-scrollbar {
        width: 0.25em;
      }

      & ::-webkit-scrollbar-track {
        border-radius: 1em;
      }

      & ::-webkit-scrollbar-thumb {
        background: $color-pink;
        border-radius: 28px;
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .wrapper {
    min-width: unset !important;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper {
    .mainTitle {
      h1 {
        color: $color-pink;
        font-size: 2em !important;
        font-weight: 900;
      }

      p {
        font-size: 0.875em !important;
      }
    }
  }
}

@media only screen and (max-width: 415px) {
  .wrapper {
    margin: 1em;
    .hrTag {
      margin: 0 1em;
    }
    .container {
      row-gap: 2em;
    }
    .section {
      padding: 0 1em !important;
      row-gap: 1em !important;
    }
    .section1 {
      .selectZone {
        flex-direction: column;
        .categories {
          width: 100%;
          overflow-x: auto;
          flex-direction: row;
          p {
            padding: 0.25em 0.5em;
            text-align: center;
          }
        }
      }
    }
    .section2 {
      .listButton {
        gap: 0.2em !important;
        justify-content: space-between !important;
        padding: 0 !important;
        button {
          padding: 1em !important;
          font-size: 0.8em;
        }
      }
    }
  }
}
</style>