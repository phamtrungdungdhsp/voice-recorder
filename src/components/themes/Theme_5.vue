<template>
  <div :class="$style.container">
    <div :class="[$style.section, $style.section1]">
      <div :class="$style.dragDrop">
        <label for="avatar">
          <img src="~@/assets/images/icons/person-circle.png" alt="" />
          <p>Drop your Photo/Videos files here or <span>Browse</span></p>
        </label>
        <input type="file" style="display: none" id="avatar" />
      </div>
      <div :class="$style.summary">
        <div :class="$style.header">
          <div :class="$style.title">Shared Loyal</div>
          <p :class="$style.description">Senior Account Manager</p>
        </div>
        <div :class="$style.text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada
          fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis
          tincidunt id aliquet risus feugiat in ante. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed
          tempus urna et pharetra. Lacus sed turpis tincidunt id aliquet risus
          feugiat in ante.
        </div>
      </div>
    </div>
    <div :class="[$style.section, $style.section2]">
      <div :class="$style.contact">
        <h3 :class="$style.title">Contact</h3>
        <div :class="$style.list">
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/phone_dark.svg" alt="" />
            </div>
            <div :class="$style.text">
              <p :class="$style.title">06 1234-4586</p>
            </div>
          </div>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/location_dark.svg" alt="" />
            </div>
            <div :class="$style.text">
              <p :class="$style.title">Melbourne</p>
            </div>
          </div>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/envelop_dark.svg" alt="" />
            </div>
            <div :class="$style.text">
              <p :class="$style.title">Sharedloyal@gmail.com</p>
            </div>
          </div>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/web_dark.svg" alt="" />
            </div>
            <div :class="$style.text">
              <p :class="$style.title">www.sharedloyal.com</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.education">
        <h3 :class="$style.title">Education</h3>
        <div
          :class="$style.item"
          v-for="(item, index) in education"
          :key="index"
        >
          <p :class="$style.degree">{{ item.degree }}</p>
          <p :class="$style.university">{{ item.college }}</p>
        </div>
      </div>
      <div :class="$style.skill">
        <h3 :class="$style.title">Skills</h3>
        <div :class="$style.item" v-for="(item, index) in skills" :key="index">
          <p>{{ item.name }}</p>
          <progress-bar :percent="item.value" />
        </div>
      </div>
    </div>

    <div :class="[$style.section, $style.section3]">
      <!-- education -->
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
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ProgressBar from "../ProgressBar.vue";

export default defineComponent({
  components: {
    ProgressBar,
  },
  setup() {
    const education = ref([
      {
        degree: "Your degree or Major",
        college: "Bharti Airtel Limited, English",
      },
      {
        degree: "Your degree or Major",
        college: "Bharti Airtel Limited, English",
      },
    ]);

    const skills = ref([
      { name: "Photoshop", value: 50 },
      { name: "Photoshop", value: 46 },
      { name: "Photoshop", value: 76 },
      { name: "Photoshop", value: 24 },
      { name: "Photoshop", value: 35 },
      { name: "Photoshop", value: 34 },
    ]);
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
    return { skills, education, experience };
  },
});
</script>

<style module lang="scss">
.container {
  border-radius: 1.125em;
  border: 1px dashed #f93975;
  width: 793px;
  display: flex;
  flex-direction: column;
  row-gap: 1em;

  .section {
    padding: 1em;
  }
  .section1 {
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    .dragDrop {
      width: 11em;
      height: 11em;
      border-radius: 50%;
      border: 1px solid #1d2756;
      display: flex;
      justify-content: center;
      align-items: center;

      > label {
        width: 10em;
        height: 10em;
        border-radius: 50%;
        border: 1px dashed #f93975;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        flex-direction: column;
        row-gap: 0.5em;
        img {
          width: 4em;
        }
        p {
          padding: 0 5px;
          font-size: 0.625em;
          text-align: center;
          font-weight: 450;
          span {
            color: #f93975;
            font-weight: bold;
          }
        }
      }
    }
    .summary {
      flex: 1;
      row-gap: 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 0.5em;
      .header {
        display: flex;
        flex-direction: column;

        .title {
          font-size: 2.5em;
          font-weight: 700;
          line-height: 1;
        }
        p {
          font-size: 0.875em;
          font-weight: 450;
        }
      }

      .text {
        font-size: 0.75em;
        font-weight: 450;
        border: 1px dashed #f93975;
        padding: 0.5em;
        border-radius: 1.125em;
      }
    }
  }
  .section2 {
    display: flex;
    flex-direction: row;
    row-gap: 1em;
    justify-content: space-between;
    h3.title {
      font-weight: 700;
      color: #02426c;
    }
    .contact {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      .list {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        font-weight: 450;
        .item {
          display: flex;
          flex-direction: row;
          column-gap: 1em;
          font-size: 0.875em;
        }
      }
    }
    .education {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      .item {
        p {
          font-size: 0.875em;
          font-weight: 400;
        }
        & .university {
          font-weight: 450;
        }
      }
    }
    .skill {
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      flex: 1;
      .item {
        display: flex;
        flex-direction: row;
        column-gap: 1em;
        align-items: center;
        p {
          font-size: 0.875em;
          font-weight: 450;
        }
      }
    }
  }
  .section3 {
    .card {
      border: 1px dashed #f93975;
      border-radius: 1em;
      padding: 1em 0.75em;

      .title {
        font-size: 1em;
        font-weight: 700;
        color: #1d2756;
        margin-bottom: 1em;
      }

      hr {
        border: none;
        height: 1px;
        background: #f93975;
        margin-bottom: 2em;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        row-gap: 1.75em;
        .item {
          display: flex;
          flex-direction: row;
          column-gap: 3em;
          font-size: 0.75em;
          font-weight: 500;
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
          .time {
            flex: 1;
          }
          .time,
          .position {
            font-weight: 600;
          }
          .role {
            flex: 7;
            display: flex;
            flex-direction: column;
            row-gap: 0.5em;
            .list {
              margin-left: 1.5em;
              p {
                display: list-item;
              }
            }
          }
          p.skill {
            display: list-item;
            margin-left: 3em;
          }
        }
      }

      .skill {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        .item {
          display: flex;
          justify-content: flex-start !important;
          align-items: center;
          column-gap: 1em;
        }
      }
    }
  }
}
</style>
