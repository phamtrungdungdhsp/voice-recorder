<template>
  <div :class="$style.formControlTag">
    <label for="">{{ label }}</label>
    <p :v-if="description">{{ description }}</p>
    <div :class="$style.tags">
      <div :class="$style.inputTags">
        <div :class="$style.input">
          <span>Please Enter to add the tags</span>
          <div :class="$style.tag">
            <ul>
              <li v-for="(tag, index) of tags" :key="tag">
                {{ tag }}
                <span :class="$style.remove" @click="removeTag(index)">x</span>
              </li>
              <input
                type="text"
                placeholder="Add search keyword to you event"
                v-model="currentTag"
                @keydown.enter="addTag(currentTag)"
                @keydown.prevent.tab="addTag(currentTag)"
                @keydown.delete="
                  currentTag.length || removeTag(tags.length - 1)
                "
              />
            </ul>
          </div>
        </div>
        <button :class="$style.addButton">Add</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "@vue/runtime-core";
export default defineComponent({
  components: {},
  props: {
    label: { type: String },
    description: { type: String },
  },
  setup() {
    const tags: Ref<string[]> = ref([]);
    const currentTag: Ref<string> = ref("");

    const addTag = (value: string): void => {
      tags.value.push(value);
      currentTag.value = "";
    };

    const removeTag = (index: number): void => {
      tags.value.splice(index, 1);
    };
    return { tags, currentTag, addTag, removeTag };
  },
});
</script>

<style module lang="scss">
.formControlTag {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  label {
    font-size: 1.25em;
    font-weight: 500;
  }

  p {
    color: $color-gray5;
    opacity: 0.5;
  }

  .tags {
    display: flex;
    flex-direction: column;

    .inputTags {
      width: 100%;
      display: flex;
      column-gap: 1em;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      align-items: stretch;
      .addButton {
        padding: 1em 4em;
        border-radius: 0.25em;
        border: 1px solid $color-pink;
        background: #fff;
        font-size: 1em;
        font-weight: 550;
        color: #17171780;
      }
      .input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: #fff;
        padding: 1em;
        flex: 1;
        justify-content: flex-start;
        row-gap: 0.5em;
        border: 1px solid $color-pink;
        border-radius: 0.25em;
        span {
          color: $color-gray5;
          opacity: 0.5;
        }
        .tag {
          width: 100%;
          display: flex;
          flex-direction: row;
          column-gap: 0.5em;
          ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.25em;
            width: 100%;
            flex-wrap: wrap;
            max-height: 4em;
            overflow-y: auto;
            li {
              padding: 0.25em 0.5em;
              background: #fa6868;
              border-radius: 0.25em;
              color: #fff;
              white-space: nowrap;
              span.remove {
                color: #fff;
                opacity: 1;
                cursor: pointer;
              }
            }
            input {
              outline: none;
              flex: 1;
              padding: 0.5em 0;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 415px) {
  .formControlTag {
    .tags {
      .inputTags {
        flex-direction: column;
        row-gap: 0.5em;
      }
    }
  }
}
</style>
