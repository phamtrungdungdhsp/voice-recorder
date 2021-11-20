<template>
  <div :class="$style.formControl">
    <label for="">{{ label }}<span v-if="required" :class="$style.required">*</span></label>
    <input type="text" :placeholder="placeholder" />
    <p :v-if="description">{{ description }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: { type: String },
    placeholder: { type: String },
    description: { type: String },
    required: { type: Boolean, default: false }
  },
  setup(props) {
    console.log(typeof props.required)
  },
});
</script>

<style module lang="scss">
  .formControl {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    width: 100%;
    .required {
      color: $color-pink;
    }
    label {
      font-size: 1.25em;
      font-weight: 500;
    }

    input {
      outline: none;
      padding: 1em;
      border: 1px solid $color-pink;
      background: #EEF2F5;
      border-radius: 0.25em;
    }

    p {
      color: $color-gray5;
      opacity: 0.5;
    }
  }
</style>
