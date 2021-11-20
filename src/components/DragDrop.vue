<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <box-icon name="cloud-upload" size="lg" type="regular"></box-icon>
      <p>
        Drop your image files here <br />
        or <span>Browse</span>
      </p>
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
  .wrapper {
    width: 100%;
    height: 20em;
    border: 1px dashed $color-pink;
    position: relative;
    cursor: pointer;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      p {
        font-size: 0.875em;
        font-weight: 450;
        white-space: nowrap;
        span {
          color: $color-pink;
          font-weight: 600;
        }
      }
    }
  }
</style>
