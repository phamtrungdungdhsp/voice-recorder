<template>
  <div :class="$style.container" :style="`color: ${themeColor}`">
    <section :class="$style.header">
      <div :class="$style.leftSide">
        <div :class="$style.avatar">
          <img src="~@/assets/icons/woman.svg" alt="woman" />
        </div>
        <div :class="$style.audio">
          <div>
            <audio-icon />
          </div>
          <div :class="$style.visualizer"></div>
          <p :class="$style.time">00:30</p>
        </div>
      </div>
      <div :class="$style.rightSide">
        <p :class="$style.badge">
          <span style="color: #fff">Hello,</span>
        </p>
        <div style="display: flex; flex-direction: row">
          <h2 :class="$style.name">I'm</h2>
          <input-custom
            placeholder="Jasmine Satham"
            color="blue"
            customStyle="font-size: 2em; color: #f93975; font-weight: 700;"
            :initValue="name"
            @onChange="changeName"
          />
        </div>
        <input-custom
          placeholder="Add Profession"
          color="#2a8bf2"
          customStyle="font-size: 0.875em;"
          :initValue="profession"
          @onChange="changeProfession"
        />
        <hr />
        <div :class="$style.information">
          <div :class="$style.row">
            <label for="">Location</label>
            <input-custom
              placeholder="Add Location"
              color="#2a8bf2"
              customStyle="font-size: 0.875em;"
              :initValue="location"
              @onChange="changeLocation"
            />
          </div>
          <div :class="$style.row">
            <label for="">Email</label>
            <input-custom
              placeholder="Add Email"
              color="#2a8bf2"
              customStyle="font-size: 0.875em;"
              :initValue="email"
              @onChange="changeEmail"
            />
          </div>
          <div :class="$style.row">
            <label for="">Phone</label>
            <input-custom
              placeholder="Add Phone"
              color="#2a8bf2"
              customStyle="font-size: 0.875em;"
              :initValue="phone"
              @onChange="changePhone"
            />
          </div>
          <div :class="$style.row">
            <label for="">Experience Video</label>
            <div :class="$style.block">
              <div :class="$style.text">
                <span :class="$style.dot"></span> Available
              </div>
              <div :class="$style.text">
                <span :class="$style.dot"></span> Not Available
              </div>
            </div>
          </div>
          <div :class="$style.row">
            <label for="">Website Link</label>
            <input-custom
              placeholder="Add Website"
              color="#2a8bf2"
              customStyle="font-size: 0.875em;"
              :initValue="website"
              @onChange="changeWebsite"
            />
          </div>
        </div>
      </div>
    </section>

    <section :class="$style.experienceSection">
      <div :class="$style.left">
        <h3 :class="$style.title">
          <span :class="$style.star"><star-svg /></span>Experience
        </h3>
        <div :class="$style.blockSide">
          <div
            :class="$style.item"
            v-for="(exp, index) in experience"
            :key="index"
          >
            <div :class="$style.leftSide">
              <div :class="$style.period">
                <input-custom
                  placeholder="2012"
                  color="gray"
                  customStyle="font-size: 0.875em;"
                  maxLength="4"
                  :initValue="exp.from"
                  @onChange="changeExperience(index, 'from', $event)"
                />
                <span :class="$style.dash"></span>
                <input-custom
                  placeholder="2012"
                  color="gray"
                  customStyle="font-size: 0.875em;"
                  maxLength="4"
                  :initValue="exp.to"
                  @onChange="changeExperience(index, 'to', $event)"
                />
              </div>
              <input-custom
                placeholder="Add Director"
                color="#2a8bf2"
                customStyle="font-size: 0.875em;"
                @onChange="changeExperience(index, 'position', $event)"
              />
              <input-custom
                placeholder="Add Company Name"
                color="#2a8bf2"
                customStyle="font-size: 0.875em;"
                @onChange="changeExperience(index, 'company', $event)"
              />
            </div>
            <div
              :class="
                index === experience.length - 1
                  ? [$style.rightSide, $style.last]
                  : $style.rightSide
              "
            >
              <text-area-custom
                placeholder="Add Work Experience"
                :initValue="exp.description"
                @onChange="changeExperience(index, 'description', $event)"
              />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.right">
        <div class="title">
          <p :class="$style.title">Experience Video</p>
          <p :class="$style.uploadedTime">
            Uploaded at Thursday, 13 December 2021
          </p>
        </div>

        <div :class="$style.uploadingZone">
          <label for="experienceVideo">
            Drop your Video files here or <span>Browse</span>
          </label>
          <input type="file" id="experienceVideo" style="display: none" />
        </div>
      </div>
    </section>

    <section :class="$style.educationSection">
      <div :class="$style.left">
        <h3 :class="$style.title">
          <span :class="$style.star"><star-svg /></span>Education
        </h3>
        <div :class="[$style.blockSide, $style.education]">
          <div
            :class="$style.item"
            v-for="(edu, index) in education"
            :key="index"
          >
            <div :class="$style.leftSide">
              <div :class="$style.period">
                <input-custom
                  placeholder="2012"
                  color="gray"
                  customStyle="font-size: 0.875em;"
                  maxLength="4"
                  :initValue="edu.from"
                  @onChange="changeEducation(index, 'from', $event)"
                />
                <span :class="$style.dash"></span>
                <input-custom
                  placeholder="2014"
                  color="gray"
                  customStyle="font-size: 0.875em;"
                  maxLength="4"
                  :initValue="edu.to"
                  @onChange="changeEducation(index, 'to', $event)"
                />
              </div>
            </div>
            <div
              :class="
                index === education.length - 1
                  ? [$style.rightSide, $style.last]
                  : $style.rightSide
              "
            >
              <text-area-custom
                placeholder="Add Education"
                :initValue="edu.college"
                @onChange="changeEducation(index, 'college', $event)"
              />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.right">
        <div class="title">
          <p :class="$style.title">Education Video</p>
          <p :class="$style.uploadedTime">
            Uploaded at Thursday, 13 December 2021
          </p>
        </div>

        <div :class="$style.uploadingZone">
          <label for="experienceVideo">
            Drop your Video files here or <span>Browse</span>
          </label>
          <input type="file" id="experienceVideo" style="display: none" />
        </div>
      </div>
    </section>

    <section :class="$style.skill">
      <h3 :class="$style.title">
        <span :class="$style.star"><star-svg /></span>Skills
      </h3>
      <div :class="$style.content">
        <div :class="$style.left">
          <div
            :class="$style.item"
            v-for="(skill, index) in skills"
            :key="index"
          >
            <input-custom
              placeholder="Your Skill"
              color="black"
              customStyle="font-size: 0.875em;"
              :initValue="skill"
              @onChange="changeSkill(index, $event)"
            />
          </div>
          <p :class="$style.add" @click="addSkills">Add Skill</p>
        </div>
        <div :class="$style.right">
          <audio-recording :color="themeColor" />
        </div>
      </div>
    </section>
    <section :class="$style.language">
      <h3 :class="$style.title">
        <span :class="$style.star"><star-svg /></span>Language
      </h3>
      <div :class="$style.item" v-for="(lang, index) in languages" :key="index">
        <input-custom
          placeholder="Language"
          color="#2a8bf2"
          customStyle="font-size: 0.875em;"
          :initValue="lang.name"
          @onChange="changeLanguage(index, 'name', $event)"
        />
        <rate :value="lang.rate" />
      </div>
      <p :class="$style.add" @click="addLanguage">Add Language</p>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import InputCustom from "../InputCustom.vue";
import TextAreaCustom from "../TextArea.vue";
import AudioRecording from "../AudioRecording.vue";
import StarSvg from "../../assets/icons/StarIcon.vue";
import AudioIcon from "../../assets/icons/AudioIcon.vue";
import Rate from "../Rate.vue";
import {
  CV_GET_NAME,
  CV_SET_NAME,
  CV_GET_EXPERIENCE,
  CV_ADD_EXPERIENCE,
  CV_CHANGE_EXPERIENCE,
  CV_GET_EDUCATION,
  CV_ADD_EDUCATION,
  CV_CHANGE_EDUCATION,
  CV_GET_SKILL,
  CV_CHANGE_SKILL,
  CV_GET_LANGUAGE,
  CV_ADD_LANGUAGE,
  CV_CHANGE_LANGUAGE,
  CV_GET_PROFESSION,
  CV_SET_PROFESSION,
  CV_GET_PERSONAL_STATEMENT,
  CV_SET_PERSONAL_STATEMENT,
  CV_GET_LOCATION,
  CV_SET_LOCATION,
  CV_GET_PHONE,
  CV_SET_PHONE,
  CV_GET_MAIL,
  CV_SET_MAIL,
  CV_SET_WEBSITE,
  CV_GET_WEBSITE,
  CV_ADD_SKILL,
} from "../../store/cv";

export default defineComponent({
  components: {
    InputCustom,
    TextAreaCustom,
    AudioRecording,
    StarSvg,
    AudioIcon,
    Rate,
  },
  props: {
    themeColor: { type: String },
  },
  setup() {
    const education = inject(CV_GET_EDUCATION);
    const addEducation = inject(CV_ADD_EDUCATION);
    const changeEducation = inject(CV_CHANGE_EDUCATION);

    const skills = inject(CV_GET_SKILL);
    const addSkills = inject(CV_ADD_SKILL);
    const changeSkill = inject(CV_CHANGE_SKILL);

    const experience = inject(CV_GET_EXPERIENCE);
    const addExperience = inject(CV_ADD_EXPERIENCE);
    const changeExperience = inject(CV_CHANGE_EXPERIENCE);

    const languages = inject(CV_GET_LANGUAGE);
    const addLanguage = inject(CV_ADD_LANGUAGE);
    const changeLanguage = inject(CV_CHANGE_LANGUAGE);

    const name = inject(CV_GET_NAME);
    const changeName = inject(CV_SET_NAME);

    const profession = inject(CV_GET_PROFESSION);
    const changeProfession = inject(CV_SET_PROFESSION);

    const personalStatment = inject(CV_GET_PERSONAL_STATEMENT);
    const changePersonalStatement = inject(CV_SET_PERSONAL_STATEMENT);

    const location = inject(CV_GET_LOCATION);
    const changeLocation = inject(CV_SET_LOCATION);

    const phone = inject(CV_GET_PHONE);
    const changePhone = inject(CV_SET_PHONE);

    const email = inject(CV_GET_MAIL);
    const changeEmail = inject(CV_SET_MAIL);

    const website = inject(CV_GET_WEBSITE);
    const changeWebsite = inject(CV_SET_WEBSITE);

    return {
      education,
      addEducation,
      changeEducation,
      skills,
      addSkills,
      changeSkill,
      experience,
      addExperience,
      changeExperience,
      languages,
      addLanguage,
      changeLanguage,
      name,
      changeName,
      profession,
      changeProfession,
      personalStatment,
      changePersonalStatement,
      location,
      changeLocation,
      phone,
      changePhone,
      email,
      changeEmail,
      website,
      changeWebsite,
    };
  },
});
</script>

<style module lang="scss">
.container {
  width: 100%;
  min-width: 793px;
  display: flex;
  flex-direction: column;
  border: 2px solid #f93975;
  border-radius: 1.125em;
  row-gap: 2em;
  padding: 1em 2em;

  h3.title {
    font-size: 1.5em;
    font-weight: 900;
    color: currentColor;
    text-transform: uppercase;
    display: inline-flex;
    line-height: 1;
    align-items: center;
    span.star {
      margin-right: 0.5em;
      img {
        width: 25px;
        height: 25px;
        object-fit: fill;
      }
    }
  }
  .uploadingZone {
    width: 80%;
    height: 12em;
    background: #999a9f;
    margin-top: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.875em;
    border-radius: 0.5em;
    cursor: pointer;
  }

  p.add {
    font-weight: 500;
    cursor: pointer;
    color: #2a8bf2;
    font-size: 0.875em;
  }

  .header {
    display: flex;
    flex-direction: row;
    column-gap: 1em;

    .leftSide {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .avatar {
        width: 100%;
        height: 12em;
        border-radius: 0.5em;
        background: currentColor;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 6em;
        }
      }

      .audio {
        display: flex;
        flex-direction: row;
        column-gap: 0.5em;
        align-items: center;

        .visualizer {
          flex: 1;
          height: 3px;
          border-radius: 0.5em;
          background: currentColor;
        }

        .time {
          font-weight: 600;
          font-size: 0.875em;
          color: currentColor;
        }
      }
    }

    .rightSide {
      flex: 5;
      .badge {
        display: inline;
        background: currentColor;
        color: currentColor;
        padding: 0.2em 0.4em;
        width: 100%;
        border-radius: 0.25em 0.25em 0.25em 0em;
        font-weight: 500;
        position: relative;
      }
      & ::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.4em;
        width: 0;
        height: 0;
        border-left: 0em solid transparent;
        border-right: 0.4em solid transparent;
        border-top: 0.4em solid currentColor;
      }

      .name {
        font-size: 2em;
        font-weight: 450;
        color: currentColor;

        > strong {
          font-weight: 700;
        }
      }

      > hr {
        border: none;
        height: 2px;
        background: #e0e0e0;
      }

      .information {
        display: flex;
        flex-direction: column;
        row-gap: 0.5em;
        .row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          align-items: center;
          > label {
            font-size: 0.875em;
            font-weight: 450;
            color: #999a9f;
          }

          .block {
            display: flex;
            flex-direction: row;
            column-gap: 1em;
            .text {
              display: flex;
              flex-direction: row;
              column-gap: 0.5em;
              align-items: center;
              font-size: 0.875em;
              color: #999a9f;
              font-weight: 450;
              .dot {
                width: 0.75em;
                height: 0.75em;
                border-radius: 50%;
                background: #c4c4c4;
              }
            }
          }
        }
      }
    }
  }

  .experienceSection,
  .educationSection {
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 1.5em;
      .blockSide {
        display: flex;
        flex-direction: column;
        column-gap: 1em;
        row-gap: 0.875em;
        .item {
          display: flex;
          flex-direction: row;
          column-gap: 2em;

          .period {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            max-width: 8em;
            span.dash {
              height: 2px;
              width: 0.5em;
              background: #919090;
              margin: 0 0.2em;
            }
          }

          .leftSide {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .rightSide {
            flex: 1.5;
            position: relative;
          }

          .rightSide::before {
            content: "";
            position: absolute;
            left: -1.125em;
            width: 1px;
            height: calc(100% + 1em);
            background: currentColor;
          }

          .rightSide::after {
            content: "";
            position: absolute;
            left: -1.5em;
            top: 0;
            width: 0.75em;
            height: 0.75em;
            border-radius: 50%;
            background: currentColor;
          }
          & .last::before {
            background: transparent;
          }
        }
      }
      & .education {
        row-gap: 1em;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      p.title {
        font-size: 1.25em;
        font-weight: 700;
        color: currentColor;
      }
      p.uploadedTime {
        color: #999a9f;
        font-size: 0.75em;
      }
    }
  }

  .skill {
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 0.75em;
    .content {
      display: flex;
      flex-direction: row;
      column-gap: 1em;
      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        row-gap: 0.75em;
      }
      .right {
        flex: 1;
      }
    }
  }

  .language {
    display: flex;
    flex-direction: column;
    row-gap: 0.875em;
    .item {
      display: flex;
      flex-direction: row;
      column-gap: 1em;
      align-items: center;

      p.name {
        font-size: 0.875em;
        font-weight: 700;
      }
    }
  }
}
</style>
