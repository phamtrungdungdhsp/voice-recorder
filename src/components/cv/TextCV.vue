<template>
  <div :class="$style.container" :style="`color: ${themeColor}`">
    <section :class="$style.header">
      <div :class="$style.avatar">
        <img src="~@/assets/icons/woman.svg" alt="woman" />
      </div>
      <div :class="$style.statement">
        <div :class="$style.personalInfo">
          <input-custom
            placeholder="Add Name"
            color="black"
            customStyle="font-size: 2em; font-weight: 700"
            :initValue="name"
            @onChange="changeName"
          />
          <input-custom
            placeholder="Add Profession"
            color="black"
            customStyle="font-size: 0.875em;"
            :initValue="profession"
            @onChange="changeProfession"
          />
        </div>
        <div :class="$style.introduce">
          <text-area-custom
            placeholder="Add Personal Statement"
            placeholderColor="#2a8bf2"
            :initValue="personalStatment"
            @onChange="changePersonalStatement"
          />
        </div>
      </div>
    </section>
    <section :class="$style.information">
      <div :class="$style.contact">
        <h3 :class="$style.title">
          <span :class="$style.star"><star-svg /></span>Contact
        </h3>
        <div :class="$style.item">
          <div :class="$style.icon">
            <location-icon />
          </div>
          <input-custom
            placeholder="Add Location"
            :color="themeColor"
            customStyle="font-size: 0.875em;"
            :initValue="location"
            @onChange="changeLocation"
          />
        </div>
        <div :class="$style.item">
          <div :class="$style.icon">
            <phone-icon />
          </div>
          <input-custom
            placeholder="Add Phone"
            :color="themeColor"
            customStyle="font-size: 0.875em;"
            @onChange="changePhone"
            :initValue="phone"
          />
        </div>

        <div :class="$style.item">
          <div :class="$style.icon">
            <email-icon />
          </div>
          <input-custom
            placeholder="Add Mail"
            :color="themeColor"
            customStyle="font-size: 0.875em;"
            @onChange="changeEmail"
            :initValue="email"
          />
        </div>
        <div :class="$style.item">
          <div :class="$style.icon">
            <globe-icon />
          </div>
          <input-custom
            placeholder="Add Website"
            :color="themeColor"
            customStyle="font-size: 0.875em;"
            @onChange="changeWebsite"
            :initValue="website"
          />
        </div>
      </div>
      <div :class="$style.education">
        <h3 :class="$style.title">
          <span :class="$style.star"><star-svg /></span>Education
        </h3>
        <div
          :class="$style.item"
          v-for="(edu, index) in education"
          :key="index"
        >
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
          <input-custom
            placeholder="Your College"
            color="#1F1F1F"
            customStyle="font-size: 0.875em;"
            :initValue="edu.college"
            @onChange="changeEducation(index, 'college', $event)"
          />
        </div>
        <p :class="$style.add" @click="addEducation">Add education</p>
      </div>
      <div :class="$style.skill">
        <h3 :class="$style.title">
          <span :class="$style.star"><star-svg /></span>Skills
        </h3>
        <div :class="$style.item" v-for="(skill, index) in skills" :key="index">
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
    </section>
    <section :class="$style.experience">
      <h3 :class="$style.title">
        <span :class="$style.star"><star-svg /></span>Experience
      </h3>
      <div :class="$style.item" v-for="(exp, index) in experience" :key="index">
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
              placeholder="2014"
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
            :initValue="exp.position"
            @onChange="changeExperience(index, 'position', $event)"
          />
          <input-custom
            placeholder="Add Company Name"
            color="#2a8bf2"
            customStyle="font-size: 0.875em;"
            :initValue="exp.company"
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
      <p :class="$style.add" @click="addExperience">Add Experience</p>
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
        <rate
          :value="lang.rate"
          @onChangeRate="changeLanguage(index, 'rate', $event)"
        />
      </div>
      <p :class="$style.add" @click="addLanguage">Add Language</p>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import TextAreaCustom from "../TextArea.vue";
import InputCustom from "../InputCustom.vue";
import StarSvg from "../../assets/icons/StarIcon.vue";
import PhoneIcon from "../../assets/icons/PhoneIcon.vue";
import LocationIcon from "../../assets/icons/LocationIcon.vue";
import EmailIcon from "../../assets/icons/EmailIcon.vue";
import GlobeIcon from "../../assets/icons/GlobeIcon.vue";
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
    TextAreaCustom,
    InputCustom,
    Rate,
    StarSvg,
    PhoneIcon,
    EmailIcon,
    GlobeIcon,
    LocationIcon,
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

  p.add {
    font-weight: 500;
    cursor: pointer;
    color: #2a8bf2;
    font-size: 0.875em;
  }
  .header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    column-gap: 2em;
    width: 100%;

    .avatar {
      width: 12em;
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

    .statement {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      height: 100%;
      .personalInfo {
        .personal {
          outline: none;
          border: none;
          color: #1f1f1f;
          padding: 0 0.25rem;
          width: 100%;
          line-height: 1;
        }
        & :focus {
          border: 1px dashed #919090 !important;
        }
        & ::placeholder {
          color: #1f1f1f !important;
        }
        & .name {
          font-size: 2em;
          font-weight: 700;
          text-transform: capitalize;
        }
        & .profession {
          font-size: 0.875em;
          font-weight: 450;
          text-transform: capitalize;
        }
      }
      .introduce {
        flex: 1;
      }
    }
  }

  .information {
    display: flex;
    flex-direction: row;
    column-gap: 1em;

    .contact {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 0.75em;
      .item {
        display: flex;
        flex-direction: row;
        column-gap: 0.75em;
        align-items: center;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25px;
          height: 25px;
        }
      }
    }
    .education {
      flex: 1;
      row-gap: 0.75em;
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        flex-direction: column;
        .period {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          max-width: 8em;
          margin-bottom: 0.15em;
          span.dash {
            height: 2px;
            width: 0.5em;
            background: #919090;
            margin: 0 0.2em;
          }
        }
      }
    }
    .skill {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 0.75em;
    }
  }

  .experience {
    display: flex;
    flex-direction: column;
    column-gap: 1em;
    row-gap: 0.875em;
    .item {
      display: flex;
      flex-direction: row;
      column-gap: 5em;

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
        flex: 4;
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
