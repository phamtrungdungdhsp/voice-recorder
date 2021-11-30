<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <div :class="$style.info">
        <div :class="$style.position">
          <div :class="$style.title">Shared Loyal</div>
          <p :class="$style.description">Senior Account Manager</p>
        </div>
        <div :class="$style.personalInfo">
          <div :class="$style.location">
            <div :class="$style.item">
              <img src="~@/assets/images/icons/location_dark.svg" alt="" />
              <p>96 Cedar Street PENRITH PLAZA New South Wales 2750</p>
            </div>
          </div>
          <div :class="$style.info">
            <div :class="$style.item">
              <img src="~@/assets/images/icons/phone_dark.svg" alt="" />
              <p>07 1257-15185-15</p>
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/envelop_dark.svg" alt="" />
              <p>sharedloyal@gmail.com</p>
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/web_dark.svg" alt="" />
              <p>www.sharedloyal.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.content">
      <!-- profile -->
      <div :class="$style.card">
        <div :class="$style.info">
          <div :class="$style.item">
            {{ summary }}
          </div>
        </div>
      </div>

      <!-- experience -->
      <div :class="$style.card">
        <h4 :class="$style.title"><span><img src="~@/assets/images/icons/suite_case.svg" alt=""></span>Experience</h4>
        <hr />
        <div :class="[$style.info, $style.experience]">
          <div
            :class="$style.item"
            v-for="(item, index) in experience"
            :key="index"
          >
            <span :class="$style.time">{{ item.from }} - {{ item.to }}</span>
            <div :class="$style.role">
              <p :class="$style.position">{{ item.position }}</p>
              <p>{{ item.location }}</p>
              <div :class="$style.list">
                <p v-for="(extra, index) in item.extras" :key="index">
                  {{ extra }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- education -->
      <div :class="$style.card">
        <h4 :class="$style.title"><span><img src="~@/assets/images/icons/book_education.svg" alt=""></span>Education</h4>
        <hr />
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

      <!-- skills -->
      <div :class="$style.card">
        <h4 :class="$style.title"><span><img src="~@/assets/images/icons/skill.svg" alt=""></span>Skills</h4>
        <hr />
        <div :class="[$style.info, $style.skill]">
          <div
            :class="$style.item"
            v-for="(item, index) in skills"
            :key="index"
          >
            <p>{{ item.name }}</p>
            <rate :value="item.rate" type="square" />
          </div>
        </div>
      </div>

      <!-- certificates -->
      <div :class="$style.card">
        <h4 :class="$style.title"><span><img src="~@/assets/images/icons/certificate.svg" alt=""></span>Certificate</h4>
        <hr />
        <div :class="$style.info">
          <div
            :class="$style.item"
            v-for="(item, index) in certificates"
            :key="index"
          >
            <span :class="$style.time">{{ item.time }}</span>
            <div :class="$style.role">
              <p>{{ item.college }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Rate from "../Rate.vue";

export default defineComponent({
  components: {
    Rate,
  },
  setup() {
    const summary = ref(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis tincidunt id aliquet risus feugiat in ante."
    );
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
      {
        time: "2016-2019",
        college: "University Name",
        degree: "Your degree or Major",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis",
      },
    ]);

    const experience = ref([
      {
        from: "2016-10",
        to: "Present",
        position: "Account Manager",
        location: "Bharti Airtel Limited, English",
        extras: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        ],
      },
      {
        from: "2016-10",
        to: "Present",
        position: "Account Manager",
        location: "Bharti Airtel Limited, English",
        extras: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        ],
      },
    ]);

    const skills = ref([
      { name: "Photoshop", rate: 4 },
      { name: "Lorem ispum dolor sit amet loermesasd", rate: 2 },
      { name: "Photoshop", rate: 1 },
      { name: "Lorem ispum dolor sit amet loermesasd", rate: 4 },
      { name: "Photoshop", rate: 4 },
      { name: "Lorem ispum dolor sit amet loermesasd", rate: 2 },
    ]);

    const certificates = ref([
      {
        time: "2016-10",
        college: "Petersburg Institute of Management Studies",
      },
    ]);
    return { summary, experience, education, skills, certificates };
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
    background: inherit;
    border-radius: 1.125em 1.125em 0 0;
    color: #020c18;
    column-gap: 2em;
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
        flex-direction: row;
        column-gap: 2em;
        width: 100%;
        .location {
          flex: 1.5;
          flex-wrap: nowrap;
          .item {
            flex-wrap: nowrap;
            align-items: flex-start;
            img {
              margin-top: 0.1em;
            }
          }
        }

        .info {
          flex: 4;
        }
        .item {
          flex: 50%;
          display: flex;
          flex-direction: row;
          align-items: center;
          column-gap: 0.5em;
          font-weight: 500;
          img {
            width: 0.825em;
          }
          p {
            font-size: 0.75em;
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
        margin-bottom: 0.5em;
        display: flex;
        flex-direction: row;
        column-gap: 0.5em;
      }

      hr {
        border: none;
        height: 1px;
        background: #f93975;
        margin: 0em 0 2em;
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
      & .experience {
        .item {
          column-gap: 3em;
        }
      }

      .skill {
        display: flex;
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          column-gap: 1em;
        }
      }
    }
  }
}
</style>