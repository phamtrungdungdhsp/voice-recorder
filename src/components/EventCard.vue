<template>
  <div :class="$style.container">
    <div :class="$style.image">
      <div :class="$style.star">
        <box-icon name="star" type="solid" color="#f93975"></box-icon>
      </div>
      <img src="~@/assets/images/event.png" alt="image" />
    </div>

    <div :class="$style.info">
      <p :class="$style.name">Event's Name</p>
      <p :class="[$style.small, $style.pink, $style.lineClamp]">Tomorrow at 19:00</p>
      <p :class="[$style.small, $style.gray, $style.lineClamp]">
        Balakosa Coffe & Co. | London | United Kingdom
      </p>
      <p :class="$style.small">Free Ticket</p>
      <p :class="[$style.small, $style.gray]">1025 Followers</p>
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
.container {
  padding: 0.75em 0.5em;
  border: 2px solid $color-pink;
  border-radius: 1em;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
  .small {
    font-size: 0.625em;
    font-weight: 500;
  }

  .lineClamp {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .pink {
    color: $color-pink;
  }

  .gray {
    color: $color-gray5;
    opacity: 0.5;
  }

  .info {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;

    .name {
      font-weight: 700;
    }
  }

  .image {
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
    }
    .star {
      position: absolute;
      right: 1em;
      bottom: 1em;
      width: 2em;
      height: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 50%;
    }
  }
}
</style>
