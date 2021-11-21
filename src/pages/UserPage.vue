<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <div :class="$style.left">
        <div :class="$style.avatar">
          <img src="~@/assets/images/avatar.png" alt="">
          <p :class="$style.name">Jasmine Statham</p>
          <p :class="$style.job">Programmer - Ruby, Phyton Developer</p>
          <div :class="$style.location">
            <box-icon type="solid" name="edit-location" cssSize="28px" color="#999A9F"></box-icon>
            <p>London, United Kingdom.</p>
          </div>
        </div>
        <hr />
        <div :class="$style.aboutMe">
          <img src="~@/assets/images/visualize.png" alt="">
          <p :class="$style.title">About me</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolores, facere nisi amet ipsum quidem incidunt voluptatem fugiat ratione eveniet ipsam, tenetur cum illum! Blanditiis eum sed aliquam saepe beatae?</p>
        </div>
      </div>
      <div :class="$style.right">

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style module lang="scss">
  .wrapper {
    background: #E0E1F4;
    .container {
      width: 50em;
      display: flex;
      flex-direction: row;
      column-gap: 1em;
      margin: 4em;
    height: 100vh;
      .left {
        flex: 2;
        background: #fff;
        border-radius: 0.5em;
        .avatar {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 5em;
          row-gap: 0.625em;
          img {
            width: 10em;
            height: 10em;
            border-radius: 50%;
            object-fit: fill;
          }

          .name {
            color: $color-pink;
            font-weight: 450;
            font-size: 0.875em;
          }
          .job {
            font-size: 0.625em;
            font-weight: 700;
          }
          .location {
            font-size: 1em;
            font-weight: 700;
            display: flex;
            flex-direction: row;
            column-gap:  0.25em;
            color: #999A9F;
          }
        }
        .aboutMe {
          display: flex;
          flex-direction: column;
          row-gap: 0.625em;
          margin: 0 0.875em;
          .title {
            font-size: 0.875em;
            color: #999A9F;
          }
        }
      }
      .right {
        flex: 4.5;
        background: #fff;
      }
    }
  }
</style>