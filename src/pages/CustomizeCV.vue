<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <section :class="$style.section1">
        <h2>Customize your CV!</h2>
        <div :class="$style.button">
          <button type="button" :class="$style.btnBack">Back</button>
          <button type="button" :class="$style.btnNext">Next</button>
        </div>
      </section>
      <div :class="$style.themeName">
        <h2>Theme Option 1</h2>
        <p>Create a professional CV.</p>
      </div>
      <section :class="$style.section2">
        <ul :class="$style.tabs">
          <!-- tab: template -->
          <li
            :class="
              tab === 'template' ? [$style.tab, $style.active] : [$style.tab]
            "
          >
            <div :class="$style.tabName" @click="setTab('template')">
              <div :class="$style.name">
                <img
                  :class="$style.icon"
                  src="~@/assets/images/icons/person.svg"
                  alt=""
                />
                <span :class="$style.text">Choose Template</span>
              </div>
              <div :class="$style.chevronRight"></div>
            </div>

            <div :class="[$style.content, $style.listTheme]">
              <div
                :class="$style.theme"
                v-for="(theme, index) of themes"
                :key="index"
              >
                <p :class="$style.title">{{ theme.name }}</p>
                <img src="~@/assets/images/cv.png" alt="" />
              </div>
            </div>
          </li>
          <!-- tab: font and color -->
          <li
            :class="
              tab === 'font_color' ? [$style.tab, $style.active] : [$style.tab]
            "
          >
            <div :class="$style.tabName" @click="setTab('font_color')">
              <div :class="$style.name">
                <img
                  :class="$style.icon"
                  src="~@/assets/images/icons/work.svg"
                  alt=""
                />
                <span :class="$style.text">Color & Fonts</span>
              </div>
              <div :class="$style.chevronRight"></div>
            </div>

            <div :class="[$style.content, $style.fontColor]">
              <font-color />
            </div>
          </li>
          <!-- tab: add section -->
          <li
            :class="
              tab === 'add_section' ? [$style.tab, $style.active] : [$style.tab]
            "
          >
            <div :class="$style.tabName" @click="setTab('add_section')">
              <div :class="$style.name">
                <img
                  :class="$style.icon"
                  src="~@/assets/images/icons/star.svg"
                  alt=""
                />
                <span :class="$style.text">Add Summary</span>
              </div>
              <div :class="$style.chevronRight"></div>
            </div>

            <div :class="[$style.content, $style.addSection]">
              <div
                :class="$style.section"
                v-for="(section, index) of listSection"
                :key="index"
              >
               {{ section.value }}
              </div>
            </div>
          </li>
        </ul>
        <div :class="$style.list">
          <theme />
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import FontColor from "../components/FontColor.vue";
import Theme from "../components/themes/Theme_5.vue";
export default defineComponent({
  components: {
    FontColor,
    Theme
  },
  setup() {
    const themes = ref([
      { name: "Option 1", img: "~@/assets/images/cv.png" },
      { name: "Option 2", img: "~@/assets/images/cv.png" },
      { name: "Option 3", img: "~@/assets/images/cv.png" },
      { name: "Option 4", img: "~@/assets/images/cv.png" },
      { name: "Option 5", img: "~@/assets/images/cv.png" },
    ]);
    const listSection = ref([
      { key: 'summary', value: 'Summary' },
      { key: 'work_experience', value: 'Work Experience' },
      { key: 'education', value: 'Education' },
      { key: 'certificates', value: 'Certificates' },
      { key: 'professional_skills', value: 'Professional Skills' },
      { key: 'technical_skills', value: 'Technical Skills' },
      { key: 'language_proficient', value: 'Language Proficienct' },
      { key: 'spheres_competence', value: 'Spheres of Competence' },
      { key: 'upload_video', value: 'Upload Video' },
      { key: 'upload_gif', value: 'Upload GIF' },
      { key: 'upload_voice_recording', value: 'Upload Voice Recordings' },
      { key: 'about', value: 'About' },
    ])
    const tab: Ref<string> = ref("");
    const setTab = (_tab: string): void => {
      _tab === tab.value ? (tab.value = "") : (tab.value = _tab);
    };
    return { themes, tab, setTab, listSection };
  },
});
</script>
<style module lang="scss">
.wrapper {
  width: 72em;
  .container {
    padding: 2em;
    background: #fff;
    border-radius: 1.125em;
    .icon {
      width: 1.2em;
      height: 1.2em;
    }
    .themeName {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-align: right;
      margin-top: 3em;

      h2 {
        color: #f93975;
        font-weight: 900;
        font-size: 1.5em;
      }
      p {
        color: #999A9F;
        font-size: 0.875em;
      }
    }
    .section1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h2 {
        font-size: 2em;
        font-weight: 900;
        color: #f93975;
      }

      .button {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        column-gap: 1em;
        button {
          padding: 0.75em 3em;
          color: #fff;
          font-weight: 600;
          font-size: 0.876em;
          border-radius: 0.25em;
        }
        & .btnBack {
          background: #919090;
        }
        & .btnNext {
          background: #f93975;
        }
      }
    }

    .section2 {
      margin-top: 3em;
      display: flex;
      flex-direction: row;
      column-gap: 2em;
      align-items: flex-start;
      .tabs {
        margin-bottom: 2em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        flex-wrap: nowrap;
        justify-content: center;
        font-weight: 500;
        color: #888888;
        width: 15em;
        .tab {
          border: none;
          cursor: pointer;
          font-size: 0.875em;
          display: flex;
          flex-direction: row;
          border-radius: 0.5em;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          display: inline;
          flex-direction: column;
          transition: all 1s;
          .tabName {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-right: 0.75em;
            padding: 1.5em 0.5em 1.5em 1.5em;
            .name {
              display: flex;
              flex-direction: row;
              column-gap: 1em;
              justify-content: space-between;
              align-items: center;
            }
          }
          .chevronRight {
            width: 1em;
            height: 1em;
            border-top: 3px solid #919090;
            border-right: 3px solid #919090;
            border-left: none;
            border-bottom: none;
            transform: rotate(45deg);
            transition: ease 1s;
          }
          .listTheme {
            height: 0;
            overflow-y: auto;
            padding: 0 1em;
            width: calc(100% - 1em) !important;
            transition: all 1s;
            margin-right: 1em;
          }
          .fontColor {
            height: 0;
            overflow: hidden;
            padding: 0 1em;
            transition: all 1s;
          }
          .addSection {
            height: 0;
            overflow: hidden;
            padding: 0 1.5em;
            transition: all 1s;
            display: flex;
            flex-direction: column;

            .section {
              padding: 0.75em 0.5em;
              border-radius: 0.25em;
            } & :hover {
              background: #F4F4F4;
            }
          }
          .content {
            .theme {
              .title {
                margin-bottom: 0.5em;
              }
              img {
                width: 12em;
              }
            }
          }
          & ::-webkit-scrollbar {
            width: 2px;
          }
          & ::-webkit-scrollbar-track {
            background: #fff;
          }
          & ::-webkit-scrollbar-thumb {
            background: #f93975;
          }
          & ::-webkit-scrollbar-thumb:hover {
            background: #f93975;
          }
        }
        & .active {
          height: auto;
          .name {
            color: #f93975;
          }
          & .chevronRight {
            transform: rotate(135deg);
            border-top-color: #f93975;
            border-right-color: #f93975;
          }
          & .listTheme {
            height: 40em;
          }
          & .fontColor {
            height: 31em;
            padding-bottom: 1em;
          }
          & .addSection {
            height: 35em;
            padding-bottom: 1em;
          }
        }
      }
      .list {
        flex: 1;
      }
    }
  }
}
</style>
