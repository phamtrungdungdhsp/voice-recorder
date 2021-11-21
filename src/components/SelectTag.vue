<template>
  <div :class="$style.eventSelect">
    <div v-for="(item, index) of listOption" :key="index" :class="$style.input">
      <label :class="$style.container">
        <input type="checkbox" name="event" id="event" value="3" />
        <span :class="$style.checkmark"></span>
      </label>
      <div :class="$style.des">
        <p :class="$style.title">{{ item.title }}</p>
        <p :class="$style.small" v-if="item.description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    listOption: { type: Array },
  },
  setup(props) {
    console.log(props.listOption)
  },
});
</script>
<style module lang="scss">
.eventSelect {
  display: flex;
  flex-direction: column;
  row-gap: 1em;

  .input {
    display: flex;
    flex-direction: row;
    column-gap: 2em;
    align-items: center;
    .des {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 1;
        font-weight: 500;
      }
      .small {
        font-size: 1em;
        color: $color-gray5;
        opacity: 0.5;
      }
    }
    .container {
      display: flex;
      position: relative;
      width: 2em;
      height: 2em;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked {
          ~ {
            .checkmark {
              background-color: $color-pink;
              &:after {
                display: block;
              }
            }
          }
        }
      }
      &:hover {
        input {
          ~ {
            .checkmark {
              background-color: $color-pink;
            }
          }
        }
      }
      .checkmark {
        &:after {
          left: 50%;
          top: 55%;
          width: 10px;
          height: 20px;
          border: solid white;
          border-width: 0 3.5px 3.5px 0;
          -webkit-transform: rotate(45deg) translate(-120%, -40%);
          -ms-transform: rotate(45deg) translate(-120%, -40%);
          transform: rotate(45deg) translate(-120%, -40%);
        }
      }
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 2em;
      width: 2em;
      border: 1px solid $color-pink;
      border-radius: 0.5em;
      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }
  }
}
</style>