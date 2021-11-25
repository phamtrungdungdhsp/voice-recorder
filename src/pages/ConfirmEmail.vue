<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <hr :class="$style.top"/>
      <div :class="$style.content">
        <img :class="$style.logo" src="~@/assets/images/icons/main_logo.svg" alt="">
        <div class="title">
<h2>Jasmine, here yours!</h2>
        <p :class="$style.description">Keep your ticket handy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        
        <hr />
        <div :class="$style.card">
          <div :class="$style.img"></div>
          <div :class="$style.info">
            <p :class="$style.title">Jasmine Statham Live Event</p>
            <div :class="$style.row">
              <p>1x Attendeed</p>
              <p>$15.00</p>
            </div>
            <hr />
            <div :class="[$style.row, $style.total]">
              <p>Total</p>
              <p>$15.00</p>
            </div>
          </div>
        </div>
        <div :class="$style.eventInfo">
          <div :class="$style.left">
              <img :class="$style.eventImage" src="~@/assets/images/icons/event.svg" alt="">
              <p :class="$style.time">September 11 2021 - Wednesday</p>
              <p :class="$style.location">Balakosa Coffe & Co. | London | United Kingdom</p>
              <p :class="$style.ticket">Free Ticket</p>
              <p :class="$style.follower">1025 Followers</p>
          </div>
          <img :class="$style.qrCode" src="~@/assets/images/qr_code.png" alt="">
        </div>
      </div>
      <hr :class="$style.bottom" />
      <p :class="$style.copyright">© Copyright 2021 Soldiers Of The Arts. All Right Reserved.</p>
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
  width: 45em;
  background: #fff;
  margin: 2em;
  border-radius: 1.125em;
  .container {
    background: #fff;
    hr {
      height: 1px;
      width: 100%;
      background: #d0d0d0;
      border: none;
      margin: 1em 0;
    } & .top {
      margin: 3em 0 2em;
      border: none;
    } & .bottom {
      background: #d0d0d0;
      margin: 2em 0 0;
    }
    .copyright {
      text-align: center;
      margin: 1em 0 1.5em;
      font-size: 0.75em;
    }
    .content {
      margin: 0 2em;
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      .logo {
        width: 15em;
      }
      h2 {
        font-size: 2.5em;
        font-weight: 900;
        color: $color-pink;
      }
      p.description {
        font-size: 0.875em;
      }
      .card {
        display: flex;
        flex-direction: row;
        .img {
          flex: 2;
          width: 100%;
          background: #d0d0d0;
          border-radius: 1.125em 0 0 1.125em;
        }
        .info {
          flex: 3;
          background: #F7F7F7;
          padding: 1em;
          border-radius: 0 1.125em 1.125em 0;
          .title {
            text-align: center;
            font-weight: 700;
            margin-bottom: 1.5em;
          }
          hr {
            margin: 0.75em 0;
          }
          .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          } & .total {
            font-weight: 700;
          }
        }
      }
      .eventInfo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 2em 0;
        .left {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          .eventImage {
            width: 3em;
          }
          .time {
            font-size: 0.75em;
            color: $color-pink;
          }
          .location {
            font-size: 0.875em;
            color: #231F2080;
            opacity: 0.5;
            margin-bottom: 1em;
          }
          .ticket {
            color: #231F20;
            font-size: 1em;
          }
          .follower {
            font-size: 0.875em;
            color: #231F2080;
            opacity: 0.5;
          }
        }
        .qrCode {
          width: 12em;
        }
      }
    }
  }
}
</style>
