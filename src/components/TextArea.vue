<template>
  <div 
    :class="isFocus ? [$style.textarea, $style.focus] : $style.textarea"
    contenteditable
    @blur="isFocus = false"
    @focus="focus"
    @input="editContent"
    :placeholder="placeholder"
    :style="`color: ${color || '#1f1f1f'};`"
    :placeholder-color="placeholderColor"
    ref="textbox"
    ></div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    placeholder: { type: String },
    color: { type: String },
    placeholderColor: { type: String },
    initValue: { type: String }
  },
  emits: ['onChange'],
  setup(props, { emit }) {
    const textbox: Ref<any> = ref(null);
    onMounted(() => {
      textbox.value.innerText = props.initValue || '';
    });
    const isFocus: Ref<boolean> = ref(false);
    const content: Ref<string> = ref('');
    const editContent = (e: any) => {
      content.value= e.currentTarget.innerText;
      emit('onChange', content.value);
    }
    const focus = () => {
      isFocus.value = true;
    }
    return { editContent, focus, isFocus, content, textbox }
  },
})
</script>

<style module lang="scss">
  .textarea {
    outline: none;
    padding: 0 0.25em;
    font-size: 0.875em;
    font-weight: 500;
    height: 100%;

    .placeholder {
      color: #2A8BF2;
    }
  }
  .textarea:hover {
    border: 1px dashed #919090;
  }
  .textarea:focus-within {
    border: 1px dashed #919090;
  }

.textarea[contenteditable][placeholder]:empty:before {
  content: attr(placeholder);
  position: absolute;
  background-color: transparent;
  color: #2a8bf2;
}
.textarea[contenteditable][placeholder-color]:empty:before {
  color: attr(placeholder-color);
}
</style>
