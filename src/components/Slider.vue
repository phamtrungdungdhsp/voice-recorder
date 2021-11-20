<template>
  <div :class="$style.sliders">
    <div :class="$style.slider">
      <img src="~@/assets/images/slider.png" alt="">
      <!-- <div class="text">
        <p>
          Now, It's <br />
          Your Time!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div> -->
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style module lang="scss">
  .sliders {
    width: 100%;
    height: 15em;
    padding: 0 2em;
    .slider {
      height: 100%;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }

  @media only screen and (max-width: 415px) {
    .sliders {
      height: 10em;
      padding: 0 1em;
    }
  }
  
</style>
