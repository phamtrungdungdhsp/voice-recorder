<template>
  <div :class="$style.container">
    <div :class="$style.leftBar">
      <div :class="$style.dragDrop">
        <label for="avatar">
          <div :class="$style.content">
            <img src="~@/assets/images/icons/person-circle.png" alt="" />
            <p>Drop your Photo/Videos files here or <span>Browse</span></p>
          </div>
        </label>
        <input type="file" style="display: none" id="avatar" />
      </div>
      <div :class="$style.under">
        <div :class="[$style.section, $style.interest]">
          <h3>Interest</h3>
          <div :class="$style.list">
            <div :class="$style.item">
              <div :class="$style.icon">
                <img src="~@/assets/images/icons/lighting.svg" alt="" />
              </div>
              <div :class="$style.text">
                <p :class="$style.title">Running</p>
                <p>lorem ipsum dolor sit amet lorem dolor sit amet lorem dol</p>
              </div>
            </div>
            <div :class="$style.item">
              <div :class="$style.icon">
                <img src="~@/assets/images/icons/readme.svg" alt="" />
              </div>
              <div :class="$style.text">
                <p :class="$style.title">Reading</p>
                <p>lorem ipsum dolor sit amet lorem dolor sit amet lorem dol</p>
              </div>
            </div>
            <div :class="$style.item">
              <div :class="$style.icon">
                <img src="~@/assets/images/icons/maki_college.svg" alt="" />
              </div>
              <div :class="$style.text">
                <p :class="$style.title">Learing</p>
                <p>lorem ipsum dolor sit amet lorem dolor sit amet lorem dol</p>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.section, $style.contact]">
          <h3>Contact</h3>
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
      </div>
    </div>
    <div :class="$style.rightContent">
      <div :class="$style.header">
        <div :class="$style.title">Shared Loyal</div>
        <p :class="$style.description">Senior Account Manager</p>
      </div>

      <!-- experience -->
      <div :class="$style.card">
        <h4 :class="$style.title">Experience</h4>
        <hr />
        <div :class="$style.info">
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
        <h4 :class="$style.title">Education</h4>
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

      <!-- key skill -->
      <div :class="$style.card">
        <h4 :class="$style.title">Skills</h4>
        <hr />
        <div :class="[$style.info, $style.skill]">
          <div
            :class="$style.item"
            v-for="(item, index) in skills"
            :key="index"
          >
            <p>{{ item.name }}</p>
            <progress-bar :percent="item.value" />
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
      { name: "Photoshop", value: 50 },
      { name: "Photoshop", value: 46 },
      { name: "Photoshop", value: 76 },
      { name: "Photoshop", value: 24 },
      { name: "Photoshop", value: 35 },
      { name: "Photoshop", value: 34 },
    ]);
    return { experience, education, skills };
  },
});
</script>

<style module lang="scss">
.container {
  border-radius: 1.125em;
  border: 1px dashed #f93975;
  width: 793px;
  display: flex;

  .leftBar {
    background: #f7dbc6;
    border-radius: 1.125em 0 0 1.125em;
    flex: 1;
    display: flex;
    flex-direction: column;
    .dragDrop {
      margin: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotate(45deg);
      width: 8em;
      height: 8em;
      border: 3px solid #f2915e;
      position: relative;
      label {
        position: absolute;
        top: 50%;
        left: 50%;
        cursor: pointer;
        background: #fff;
        border: 3px solid #f7dbc6;
        width: calc(8em - 3px);
        height: calc(8em - 3px);
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, -50%);
        .content {
          display: flex;
          flex-direction: column;
          transform: rotate(-45deg);
          justify-content: center;
          align-items: center;
          row-gap: 0.5em;
          img {
            width: 3em;
          }
          p {
            font-size: 0.5625em;
            color: black;
            font-weight: 500;
            text-align: center;
            flex-wrap: nowrap;
            span {
              color: #f93975;
            }
          }
        }
      }
    }
    .under {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0 1em;
      margin-bottom: 1em;

      .section {
        > h3 {
          color: #eb8343;
          width: 100%;
          font-size: 1.125em;
          border-bottom: 2px solid #eb8343;
          padding-bottom: 0.25em;
          margin-bottom: 1em;
          font-weight: 500;
        }

        .list {
          display: flex;
          flex-direction: column;
          row-gap: 1em;
          font-size: 0.875em;
          font-weight: 400;
          .item {
            display: flex;
            flex-direction: row;
            column-gap: 1em;
            img {
              width: 0.875em;
            }
            .text {
              p.title {
                font-weight: 700;
                line-height: 1;
                margin-bottom: 0.5em;
              }
            }

          }
        }
      }

      .contact {
        .item {
          align-items: center;
          .text {
            p.title {
              font-weight: 500 !important;
            }
          }
        }
      }
    }
  }

  .rightContent {
    flex: 4;
    padding: 1em;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2em 0 1em;

      .title {
        font-size: 3em;
        font-weight: 700;
      }
      p {
        font-size: 0.875em;
        font-weight: 450;
      }
    }

    .card {
      border: 1px dashed #f93975;
      border-radius: 1em;
      padding: 1em 0.75em;
      
      .title {
        font-size: 1em;
        font-weight: 700;
        color: #f2915e;
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
        row-gap: 0.75em;
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
