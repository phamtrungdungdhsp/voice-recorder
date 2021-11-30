<template>
  <div :class="$style.container">
    <div :class="$style.colors">
      <p :class="$style.title">Color</p>
      <div :class="$style.colorTable">
        <div
          :class="
            color === hexColor ? [$style.color, $style.active] : $style.color
          "
          v-for="(hexColor, index) in listColors"
          :key="index"
          @click="setColor(hexColor)"
        >
          <div :class="$style.circle" :style="`background: ${hexColor}`"></div>
        </div>
      </div>
    </div>
    <div :class="$style.fonts">
      <p :class="$style.title">Fonts</p>
      <div :class="$style.fontList">
        <p v-for="(font, index) in listFonts" :key="index">{{ font }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  setup() {
    const color: Ref<string> = ref("#63677C");
    const listColors: Ref<string[]> = ref([
      "#63677C",
      "#031635",
      "#1F497D",
      "#339FC3",
      "#005389",
      "#F93975",
      "#8EB9EB",
      "#6967BA",
      "#4CAB96",
      "#B8B79A",
    ]);
    const listFonts: Ref<string[]> = ref(['Circular Std', 'Poppins', 'Open Sans', 'Recoleta', 'Roboto']);
    const setColor = (hexColor: string): void => {
      color.value = hexColor;
    };
    return { listColors, color, setColor, listFonts };
  },
});
</script>
<style module lang="scss">
.container {
  .title {
    font-weight: 550;
    color: #f93975;
    font-size: 1.125em;
    text-align: center;
    margin-bottom: 1em;
  }
  .colors {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2em;
    .colorTable {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 0.5em;
      .color {
        width: 2.5em;
        height: 2.5em;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .circle {
          width: 2em;
          height: 2em;
          border-radius: 50%;
        }
      }
      & .active {
        border: 1px solid #f93975;
      }
    }
  }
  .fonts {
    .fontList {
      display: flex;
      flex-direction: column;
      row-gap: 1em;

      p {
        border: 1px solid #F93975;
        border-radius: 0.25em;
        padding: 0.5em;
        cursor: pointer;
      }
    }
  }
}
</style>