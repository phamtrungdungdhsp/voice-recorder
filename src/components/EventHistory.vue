<template>
  <div :class="$style.wrapper">
    <div :class="$style.draft" v-if="!active">
      <a href="#">Draft</a>
      <img src="~@/assets/images/icons/bi_trash-fill.svg" alt="" />
    </div>
    <div
      :class="
        !!active ? [$style.container] : [$style.container, $style.unActive]
      "
    >
      <div :class="$style.image">
        <img src="~@/assets/images/event1.png" alt="" />
      </div>
      <div :class="$style.info">
        <img src="~@/assets/images/icons/event.svg" alt="" />
        <p :class="$style.name">Event's Name</p>
        <p :class="[$style.time, $style.lineClamp]">September 11 2021 - Wednesday</p>
        <p :class="[$style.location, $style.gray, $style.lineClamp]">
          Balakosa Coffe & Co. | London | United Kingdom
        </p>
        <p :class="$style.price">$0.00</p>
        <div :class="[$style.followers, $style.gray]">
          <div :class="$style.block">
            <img src="~@/assets/images/icons/friends.svg" alt="" /> <span :class="$style.lineClamp">1025 Followers</span>
          </div>
          <div :class="$style.block">
            <div :class="$style.dot"></div><span :class="$style.lineClamp">800 Attendees</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    active: { type: Boolean, default: true },
  },
  setup() {},
});
</script>

<style module lang="scss">
.wrapper {
  position: relative;
  .draft {
    position: absolute;
    right: 1em;
    top: 0.5em;
    display: flex;
    align-items: center;
    column-gap: 0.25em;
    a {
      font-size: 0.875em;
      color: $color-pink;
      text-decoration: underline 1px;
      text-underline-offset: 0.2em;
    }
  }
  .container {
    display: flex;
    flex-direction: row;
    gap: 1em;
    .image {
      flex: 1;
      img {
        width: 20em;
        object-fit: fill;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      img {
        width: 2em;
        height: 2em;
        object-fit: fill;
      }
      .name {
        font-size: 1em;
        font-weight: 500;
      }
      .time {
        font-size: 0.9em;
        font-weight: 450;
        color: $color-pink;
      }
      .location,
      .price {
        font-size: 0.75em;
        font-weight: 500;
      }
      .lineClamp {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .gray {
        color: #999a9f;
      }
      .followers {
        font-size: 0.75em;
        display: inline-flex;
        align-items: center;
        column-gap: 1em;
        .block {
            display: flex;
            align-items: center;
            column-gap: 0.25em;
          }
        img {
          width: 1em;
          height: 1em;
          color: black;
        }
        .dot {
          display: inline-block;
          width: 4px;
          height: 4px;
          background: $color-gray5;
          border-radius: 50%;
        }
      }
    }
  }
  & .unActive {
    opacity: 0.5;
  }
}
@media only screen and (max-width: 640px) {
  .wrapper {
    .container {
      border: 1px solid $color-pink;
      row-gap: 0;
      flex-direction: column;
      padding: 0.5em;
      border-radius: 0.5em;
      .image {
        flex: 1;
        width: 100%;
        img {
          width: 100%;
          object-fit: fill;
        }
      }
      .info {
        flex: 1;
        img {
          display: none;
        }
      }
    }
  }
}
</style>
