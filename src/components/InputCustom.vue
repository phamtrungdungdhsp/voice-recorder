<template>
  <div :class="$style.container" :style="`color: ${color}`">
    <input
      :class="$style.input"
      type="text"
      :style="customStyle"
      :placeholder="placeholder"
      :maxLength="maxLength"
      v-model="value"
      @input="onChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from "vue";

export default defineComponent({
  emits: ['onChange'],
  props: {
    placeholder: { type: String },
    color: { type: String },
    customStyle: { type: String },
    maxLength: { type: String },
    initValue: { type: String }
  },
  setup(props, { emit }) {
    const value: Ref<string> = ref('');
    onMounted(() => {
      value.value = props.initValue || '';
    });
    const onChange = (e: any) => {
      emit('onChange', e.target.value);
    }
    return { onChange, value }
  },
});
</script>

<style module lang="scss">
.container {
  .input {
    font-size: 0.875em;
    font-weight: 500;
    outline: none;
    border: 1px dashed transparent;
    padding: 0 0.25rem;
    width: 100%;
    flex: 1;
    color: currentColor;
  }
  & ::placeholder {
    font-size: 0.875em;
    font-weight: 500;
    color: currentColor;
    font-weight: inherit;
  }
  & :focus {
    border: 1px dashed #919090 !important;
  }
  input.input:hover {
    border: 1px dashed #919090 !important;
  }
}
</style>
