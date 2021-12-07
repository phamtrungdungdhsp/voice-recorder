import { provide, readonly, ref, Ref, defineComponent } from "vue";

export const CV_GET_NAME = Symbol("CV_GET_NAME");
export const CV_SET_NAME = Symbol("CV_SET_NAME");

export const CV_GET_PROFESSION = Symbol("CV_GET_PROFESSION");
export const CV_SET_PROFESSION = Symbol("CV_SET_PROFESSION");

export const CV_GET_PERSONAL_STATEMENT = Symbol("CV_GET_PERSONAL_STATEMENT");
export const CV_SET_PERSONAL_STATEMENT = Symbol("CV_SET_PERSONAL_STATEMENT");

export const CV_GET_LOCATION = Symbol("CV_GET_LOCATION");
export const CV_SET_LOCATION = Symbol("CV_SET_LOCATION");

export const CV_GET_PHONE = Symbol("CV_GET_PHONE");
export const CV_SET_PHONE = Symbol("CV_SET_PHONE");

export const CV_GET_MAIL = Symbol("CV_GET_MAIL");
export const CV_SET_MAIL = Symbol("CV_SET_MAIL");

export const CV_GET_WEBSITE = Symbol("CV_GET_WEBSITE");
export const CV_SET_WEBSITE = Symbol("CV_SET_WEBSITE");

export const CV_GET_EXPERIENCE = Symbol("CV_GET_EXPERIENCE");
export const CV_ADD_EXPERIENCE = Symbol("CV_ADD_EXPERIENCE");
export const CV_CHANGE_EXPERIENCE = Symbol("CV_CHANGE_EXPERIENCE");

export const CV_GET_EDUCATION = Symbol("CV_GET_EDUCATION");
export const CV_ADD_EDUCATION = Symbol("CV_ADD_EDUCATION");
export const CV_CHANGE_EDUCATION = Symbol("CV_CHANGE_EDUCATION");

export const CV_GET_SKILL = Symbol("CV_GET_SKILL");
export const CV_ADD_SKILL = Symbol("CV_ADD_SKILL");
export const CV_CHANGE_SKILL = Symbol("CV_CHANGE_SKILL");

export const CV_GET_LANGUAGE = Symbol("CV_GET_LANGUAGE");
export const CV_ADD_LANGUAGE = Symbol("CV_ADD_LANGUAGE");
export const CV_CHANGE_LANGUAGE = Symbol("CV_CHANGE_LANGUAGE");

export default defineComponent({
  setup () {
    /** education */
    const education: Ref<any> = ref([
      { from: "", to: "", college: "" },
      { from: "", to: "", college: "" }
    ]);
    const addEducation = () => {
      education.value.push({ from: "", to: "", college: "" });
    };
    const changeEducation = (index: number, key: string, value: string) => {
      education.value[index][key] = value;
    };
    provide(CV_GET_EDUCATION, readonly(education));
    provide(CV_ADD_EDUCATION, addEducation);
    provide(CV_CHANGE_EDUCATION, changeEducation);

    /** skills */
    const skills: Ref<string[]> = ref([]);
    const addSkills = () => {
      skills.value.push("");
    };
    const changeSkill = (index: number, value: string) => {
      skills.value[index] = value;
    };
    provide(CV_GET_SKILL, readonly(skills));
    provide(CV_ADD_SKILL, addSkills);
    provide(CV_CHANGE_SKILL, changeSkill);

    /** experience */
    const experience: Ref<any> = ref([
      { from: "", to: "", position: "", company: "", description: "" },
      { from: "", to: "", position: "", company: "", description: "" },
      { from: "", to: "", position: "", company: "", description: "" },
      { from: "", to: "", position: "", company: "", description: "" },
    ]);
    const addExperience = () => {
      experience.value.push({
        from: "",
        to: "",
        position: "",
        company: "",
        description: "",
      });
    };
    const changeExperience = (index: number, key: string, value: string) => {
      experience.value[index][key] = value;
    };
    provide(CV_GET_EXPERIENCE, readonly(experience));
    provide(CV_ADD_EXPERIENCE, addExperience);
    provide(CV_CHANGE_EXPERIENCE, changeExperience);

    const languages: Ref<any> = ref([{ name: "English", rate: 5 }]);
    const addLanguage = () => {
      languages.value.push({ name: "English", rate: 5 });
    };
    const changeLanguage = (index: number, key: string, value: string) => {
      languages.value[index][key] = key === "rate" ? +value : value;
    };
    provide(CV_GET_LANGUAGE, readonly(languages));
    provide(CV_ADD_LANGUAGE, addLanguage);
    provide(CV_CHANGE_LANGUAGE, changeLanguage);

    /** name */
    const name: Ref<string> = ref("");
    const changeName = (data: string) => (name.value = data);
    provide(CV_GET_NAME, readonly(name));
    provide(CV_SET_NAME, changeName);

    /** profession */
    const profession: Ref<string> = ref("");
    const changeProfession = (data: string) => (profession.value = data);
    provide(CV_SET_PROFESSION, readonly(profession));
    provide(CV_SET_PROFESSION, changeProfession);

    /** personal statement */
    const personalStatment: Ref<string> = ref("");
    const changePersonalStatement = (data: string) =>
      (personalStatment.value = data);
    provide(CV_GET_PERSONAL_STATEMENT, readonly(personalStatment));
    provide(CV_SET_PERSONAL_STATEMENT, changePersonalStatement);

    /** location */
    const location: Ref<string> = ref("");
    const changeLocation = (data: string) => (location.value = data);
    provide(CV_GET_LOCATION, readonly(location));
    provide(CV_SET_LOCATION, changeLocation);

    /** phone */
    const phone: Ref<string> = ref("");
    const changePhone = (data: string) => (phone.value = data);
    provide(CV_GET_PHONE, readonly(phone));
    provide(CV_SET_PHONE, changePhone);

    /** email */
    const email: Ref<string> = ref("");
    const changeEmail = (data: string) => (email.value = data);
    provide(CV_GET_MAIL, readonly(email));
    provide(CV_SET_MAIL, changeEmail);

    /** website */
    const website: Ref<string> = ref("");
    const changeWebsite = (data: string) => (website.value = data);
    provide(CV_GET_WEBSITE, readonly(website));
    provide(CV_SET_WEBSITE, changeWebsite);
  },
  render() {
    if (!this.$slots.default) {
      return;
    }
    return this.$slots.default();
  },
});