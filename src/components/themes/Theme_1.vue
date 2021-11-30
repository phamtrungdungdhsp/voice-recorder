<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <div :class="$style.title">Shared Loyal</div>
      <p :class="$style.description">Senior Account Manager</p>
    </div>
    <div :class="$style.content">
      <div :class="$style.left">
        <div :class="$style.summary">{{ summary }}</div>

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
              <span :class="$style.time">{{ item.time }}</span>
              <div :class="$style.role">
                <p>{{ item.college }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- key skill -->
        <div :class="$style.card">
          <h4 :class="$style.title">Key Skills</h4>
          <hr />
          <div :class="$style.info">
            <div
              :class="$style.item"
              v-for="(item, index) in skills"
              :key="index"
            >
              <p :class="$style.skill">{{ item }}</p>
            </div>
          </div>
        </div>

        <!-- certificates -->
        <div :class="$style.card">
          <h4 :class="$style.title">Certificate</h4>
          <hr />
          <div :class="$style.info">
            <div
              :class="$style.item"
              v-for="(item, index) in certificates"
              :key="index"
            >
              <p :class="$style.skill">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.right">
        <div :class="[$style.card, $style.dragDrop]">
          <label for="avatar">
            <img
              style="width: 5em"
              src="~@/assets/images/icons/person-circle.png"
              alt=""
            />
            <p>
              Drop your Photo/Videos files here <br />
              or <span>Browse</span>
            </p>
          </label>

          <input type="file" name="avatar" id="avatar" style="display: none" />
        </div>

        <!-- personal info -->
        <div :class="$style.card">
          <h4 :class="$style.title">Personal Info</h4>
          <hr />
          <div :class="$style.info">
            <div :class="$style.formControl">
              <label for="">Location</label>
              <input type="text" placeholder="Add Location" />
            </div>
            <div :class="$style.formControl">
              <label for="">Phone</label>
              <input type="text" placeholder="Add Phone" />
            </div>
            <div :class="$style.formControl">
              <label for="">Email</label>
              <input type="text" placeholder="Add Email" />
            </div>
            <div :class="$style.formControl">
              <label for="">Website</label>
              <input type="text" placeholder="Add Website" />
            </div>
            <div :class="$style.formControl">
              <label for="">Nationally</label>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>
        <div :class="$style.card">
          <h4 :class="$style.title">Language</h4>
          <div :class="$style.info">
            <div
              :class="[$style.item, $style.language]"
              v-for="(language, index) in languages"
              :key="index"
            >
              <p>{{ language.name }}</p>
              <rate :value="language.rate" type="circle"/>
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
    Rate
  },
  setup() {
    const summary = ref(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Lacus sed turpis tincidunt id aliquet risus feugiat in ante."
    );
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
        time: "2016-10",
        college: "Bharti Airtel Limited, English",
      },
    ]);

    const skills = ref([
      "Sales & Negotiations Skill",
      "CRM Software (Salesforce, HubSpot)",
      "Good Communications",
      "Customer Service Orientation",
    ]);

    const certificates = ref([
      "Certified Business Realtionship 2007 - 10 (CBRM)",
      "NAND Benefits Account Manager Certification",
    ]);

    const languages = ref([
      { name: "English", rate: 3 },
      { name: "Spanish", rate: 4 },
      { name: "Hindi", rate: 2 },
    ]);
    return { summary, experience, education, skills, certificates, languages };
  },
});
</script>

<style module lang="scss">
.container {
  border-radius: 1.125em;
  border: 1px dashed #f93975;
  width: 793px;

  .header {
    padding: 1.5em 2.5em;
    background: #005389;
    border-radius: 1.125em 1.125em 0 0;
    color: #fff;

    .title {
      font-size: 2em;
      font-weight: 700;
    }
    p {
      font-size: 0.875em;
    }
  }

  .content {
    padding: 1em;
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    .card {
      border: 1px dashed #f93975;
      border-radius: 1em;
      padding: 1em 0.75em;

      .title {
        font-size: 1em;
        font-weight: 700;
        color: #02426c;
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
        row-gap: 0.75em;
        .item {
          display: flex;
          flex-direction: row;
          column-gap: 1em;
          font-size: 0.75em;
          font-weight: 500;
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
        .language {
          margin-top: 1em;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            font-size: 0.875em;
            font-weight: 600;
          }
        }
        .formControl {
          font-size: 0.75em;
          display: flex;
          flex-direction: column;
          row-gap: 0.25em;
          label {
            font-weight: 600;
          }
          input[type="text"] {
            border: 1px solid #f93975;
            outline: none;
            padding: 0.25em 1em;
            border-radius: 0.25em;
            color: #919090;
          }
          p {
            font-weight: 500;
          }
        }
      }
    }
    .left {
      flex: 5;
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      .summary {
        padding: 1em 0.75em;
        font-size: 0.75em;
        border: 1px dashed #f93975;
        border-radius: 1em;
        font-weight: 450;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      flex: 2;
      .dragDrop {
        height: 15em;
        > label {
          cursor: pointer;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          p {
            margin-top: 1em;
            font-size: 0.7em;
            font-weight: 500;
            text-align: center;
            span {
              color: #f93975;
              font-weight: 500;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>