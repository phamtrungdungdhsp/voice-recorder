<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <div :class="$style.dragDrop">
        <label for="avatar">
          <img src="~@/assets/images/icons/person-circle.png" alt="" />
          <p>
            Drop your Photo/Videos files here <br />
            or <span>Browse</span>
          </p>
        </label>
        <input type="file" style="display: none" id="avatar" />
      </div>
      <div :class="$style.info">
        <div :class="$style.position">
          <div :class="$style.title">Shared Loyal</div>
          <p :class="$style.description">Senior Account Manager</p>
        </div>
        <div :class="$style.personalInfo">
          <div :class="$style.item">
            <img src="~@/assets/images/icons/phone.svg" alt="" />
            <p>07 1257-15185-15</p>
          </div>
          <div :class="$style.item">
            <img src="~@/assets/images/icons/envelop.svg" alt="" />
            <p>sharedloyal@gmail.com</p>
          </div>
          <div :class="$style.item">
            <img src="~@/assets/images/icons/location.svg" alt="" />
            <p>Senior Account Manager</p>
          </div>
          <div :class="$style.item">
            <img src="~@/assets/images/icons/web.svg" alt="" />
            <p>www.sharedloyal.com</p>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.content">
      <!-- profile -->
      <div :class="$style.card">
        <h4 :class="$style.title">Profile</h4>
        <div :class="$style.info">
          <div :class="$style.item">
            {{ summary }}
          </div>
        </div>
      </div>

      <!-- education -->
      <div :class="$style.card">
        <h4 :class="$style.title">Education</h4>
        <div :class="$style.info">
          <div
            :class="$style.item"
            v-for="(item, index) in education"
            :key="index"
          >
            <div :class="$style.left">
              <p :class="$style.time">{{ item.time }}</p>
              <p :class="$style.name">{{ item.college }}</p>
            </div>
            <div
              :class="[$style.timeline, $style.bot]"
              v-if="index === 0"
            ></div>
            <div
              :class="[$style.timeline, $style.top]"
              v-else-if="index === education.length - 1"
            ></div>
            <div
              :class="[$style.timeline, $style.top, $style.bot]"
              v-else
            ></div>
            <div :class="$style.right">
              <p :class="$style.degree">{{ item.degree }}</p>
              <p :class="$style.description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- experience -->
      <div :class="$style.card">
        <h4 :class="$style.title">Experience</h4>
        <div :class="$style.info">
          <div
            :class="$style.item"
            v-for="(item, index) in experience"
            :key="index"
          >
            <div :class="$style.left">
              <p :class="$style.time">{{ item.time }}</p>
              <p :class="$style.name">{{ item.college }}</p>
            </div>
            <div
              :class="[$style.timeline, $style.bot]"
              v-if="index === 0"
            ></div>
            <div
              :class="[$style.timeline, $style.top]"
              v-else-if="index === experience.length - 1"
            ></div>
            <div
              :class="[$style.timeline, $style.top, $style.bot]"
              v-else
            ></div>
            <div :class="$style.right">
              <p :class="$style.degree">{{ item.degree }}</p>
              <p :class="$style.description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- key skill -->
      <div :class="$style.card">
        <h4 :class="$style.title">Skills</h4>
        <div :class="[$style.info, $style.skill]">
          <div
            :class="$style.item"
            v-for="(item, index) in skills"
            :key="index"
          >
            <p>{{ item.name }}</p>
            <progress-bar :percent="item.value"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ProgressBar from "../ProgressBar.vue"

export default defineComponent({
  components: {
    ProgressBar
  },
  setup() {
    const summary = ref(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis tincidunt id aliquet risus feugiat in ante."
    );
    const experience = ref([
      {
        time: "2016-2019",
        college: "University Name",
        degree: "Your degree or Major",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis",
      },
      {
        time: "2016-2019",
        college: "University Name",
        degree: "Your degree or Major",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis",
      },
      {
        time: "2016-2019",
        college: "University Name",
        degree: "Your degree or Major",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis",
      },
    ]);

    const education = ref([
      {
        time: "2016-2019",
        college: "University Name",
        degree: "Your degree or Major",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis",
      },
      {
        time: "2016-2019",
        college: "University Name",
        degree: "Your degree or Major",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis",
      },
    ]);

    const skills = ref([
      { name: 'Photoshop', value: 50 },
      { name: 'Photoshop', value: 46 },
      { name: 'Photoshop', value: 76 },
      { name: 'Photoshop', value: 24 },
      { name: 'Photoshop', value: 35 },
      { name: 'Photoshop', value: 34 },
    ]);
    return { summary, experience, education, skills };
  },
});
</script>

<style module lang="scss">
.container {
  border-radius: 1.125em;
  border: 1px dashed #f93975;
  width: 793px;

  .header {
    display: flex;
    flex-direction: row;
    padding: 1.5em 2.5em;
    background: #005389;
    border-radius: 1.125em 1.125em 0 0;
    color: #fff;
    column-gap: 2em;
    .dragDrop {
      display: flex;
      justify-content: center;
      align-items: center;
      label {
        cursor: pointer;
        background: #fff;
        width: 10em;
        height: 10em;
        border-radius: 50%;
        border: 1px dashed #f93975;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 0.5em;
        img {
          width: 4em;
        }
        p {
          font-size: 0.5625em;
          color: black;
          font-weight: 500;
          text-align: center;
          span {
            color: #f93975;
          }
        }
      }
    }
    .info {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      row-gap: 0.75em;
      .position {
        .title {
          font-size: 2em;
          font-weight: 700;
        }
        p {
          font-size: 0.875em;
        }
      }
      .personalInfo {
        display: flex;
        flex-wrap: wrap;
        row-gap: 0.4em;
        width: 100%;
        .item {
          flex: 50%;
          display: flex;
          flex-direction: row;
          align-items: center;
          column-gap: 0.5em;
          img {
            width: 0.825em;
          }
          p {
            font-size: 0.875em;
          }
        }
      }
    }
  }

  .content {
    padding: 1em;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    .card {
      border: 1px dashed #f93975;
      border-radius: 1em;
      padding: 1em 0.75em;

      .title {
        font-size: 1em;
        font-weight: 700;
        color: #02426c;
        margin-bottom: 1em;
      }

      hr {
        border: none;
        height: 1px;
        background: #f93975;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        .item {
          font-size: 0.75em;
          font-weight: 450;
          display: flex;
          flex-direction: row;
          column-gap: 5em;
          position: relative;
          .timeline {
            width: 1.2em;
            height: 1.2em;
            background: #f93975;
            border-radius: 50%;
            position: relative;
            align-self: center;
          }
          & .top::before {
            content: "";
            width: 1px;
            height: 5em;
            background: #f93975;
            position: absolute;
            bottom: 100%;
            left: 50%;
            z-index: 9;
          }
          & .bot::after {
            content: "";
            width: 1px;
            height: 5em;
            background: #f93975;
            position: absolute;
            top: 100%;
            left: 50%;
            z-index: 10;
          }
          .left {
            display: flex;
            flex-direction: column;
            flex: 1;
            row-gap: 0.5em;
            .name {
              font-weight: 550;
            }
          }

          .right {
            display: flex;
            flex-direction: column;
            flex: 5;
            row-gap: 0.5em;
            .degree {
              font-weight: 550;
            }
            .description {
              flex: 0;
            }
          }
        }
      }
      .skill {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
        .item {
          display: flex;
          justify-content: flex-start !important;
          align-items: center;
          column-gap: 2em;
        }
      }
    }
  }
}
</style>