<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <div :class="$style.headbar">
        <div :class="$style.icons">
          <img src="~@/assets/images/icons/home.svg" alt="" />
          <img src="~@/assets/images/icons/users.svg" alt="" />
          <img src="~@/assets/images/icons/envelop.svg" alt="" />
        </div>
        <div :class="$style.locationForm">
          <form action="">
            <div :class="$style.icon">
              <box-icon name="search" color="#020C18"></box-icon>
            </div>
            <input type="text" placeholder="Your location" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div :class="$style.info">
          <p>Mathew Jons</p>
          <img src="~@/assets/images/avatar.png" alt="" />
        </div>
      </div>
      <div :class="$style.video">
        <div :class="$style.image">
          <div :class="$style.blurPanel"></div>
          <div :class="$style.info">
            <p> <box-icon name='podcast' color="#fff" style="height: 1em; width: 1em; vertical-align: sub;"></box-icon> Premieres in 3 days 13 hourse</p>
            <button type="button">
              <box-icon name='bell' color="#fff" style="height: 1em; width: 1em; vertical-align: sub;"></box-icon>
              Set Reminder
            </button>
          </div>
          <img src="~@/assets/images/event_mg.png" alt="" srcset="" />
        </div>
        <p :class="$style.title">
          How to influence people on the your new circle
        </p>
        <div :class="$style.user">
          <img src="~@/assets/images/avatar.png" alt="" />
          <div :class="$style.info">
            <div :class="$style.name">
              <p>Jasmine Statham</p>
              <span :class="$style.dot"></span>
              <p>LIVE</p>
            </div>
            <div :class="$style.count">
              <p>1,980 People watching now</p>
              <span :class="$style.dot"></span>
              <p :class="$style.streaming">Started streaming 2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.chat">
        <p :class="$style.title">Participant's chat</p>
        <hr />
        <div :class="$style.chatbox">
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.comments">
        <div :class="$style.content">
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
          <div :class="$style.message">
            <img src="~@/assets/images/avatar.png" alt="" />
            <div :class="$style.sender">
              <p :class="$style.name">Frederich A.</p>
              <p :class="$style.detail">Please send me the project scopr</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.suggest">
        <div :class="$style.image"></div>
        <div :class="$style.card">
          <p :class="$style.title">Lorem ipsum dolor sit amet lor</p>
          <p :class="$style.name">James Mardzukick</p>
          <p :class="$style.watching">235 People watch this now</p>
        </div>
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
  margin: 4em;
  width: 60em;
  box-sizing: border-box;
  min-height: 0;
  border-radius: 1.125em;
  background: #e0e1f4;
  display: flex;
  flex-direction: column;
  .container {
    display: grid;
    grid-template-columns: 7fr 3.5fr;
    grid-template-rows: 4em 1fr 8em;
    grid-template-areas:
      "headbar headbar"
      "video chat"
      "comment suggest";
    gap: 1em;
    margin: 1em;
    .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: $color-pink;
    }
    .headbar {
      grid-area: headbar;
      background: #f5f5f5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em 1.5em;
      border-radius: 1.125em;
      .icons {
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        column-gap: 0.75em;
        img {
          width: 1em;
          cursor: pointer;
        }
      }
      .locationForm {
        flex: 2;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        form {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          border-radius: 0.25em;
          padding: 0.3em 0.6em;
          border-radius: 0.25em;
          background: #fff;
          font-size: 0.875em;
          .icon {
            display: flex;
            align-items: center;
            margin: 0 0.125em;
            opacity: 0.5;
          }
          input {
            outline: none;
            flex: 1;
            font-weight: 500;
            padding: 0 0.75em;
          }
          button {
            background: $color-pink;
            color: #fff;
            padding: 0.625em 2em;
            border-radius: 0.25em;
            font-size: 0.75em;
            font-weight: 550;
          }
        }
      }
      .info {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        column-gap: 0.5em;
        p {
          font-weight: 450;
          font-size: 0.875em;
          color: #999a9f;
        }
        img {
          width: 2.5em;
          height: 2.5em;
          border-radius: 50%;
        }
      }
    }
    .video {
      grid-area: video;
      background: #f5f5f5;
      border-radius: 1.125em;
      padding: 1.5em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      row-gap: 0.6em;
      .image {
        position: relative;
        border-radius: 1.125em;
        width: 100%;
        height: 20em;
        .info {
          position: absolute;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          bottom: 0;
          height: 3em;
          color: #fff;
          padding: 0 1em;
          p {
            font-size: 0.75em;
            font-weight: 450;
          }
          button {
            background: $color-pink;
            color: #fff;
            font-size: 0.8125em;
            font-weight: 500;
            padding: 0.5em 1em;
            border-radius: 0.25em;
          }
        }
        .blurPanel {
          height: 3em;
          width: 100%;
          background: #020c18;
          opacity: 0.35;
          position: absolute;
          bottom: 0;
          border-radius: 0 0 1.125em 1.125em;
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 1.125em;
          object-fit: cover;
        }
      }
      .title {
        font-size: 1.5em;
        font-weight: 800;
      }
      .user {
        display: flex;
        flex-direction: row;
        column-gap: 0.5em;
        align-items: center;
        img {
          width: 2em;
          height: 2em;
          object-fit: fill;
          border-radius: 50%;
        }
        .info {
          display: flex;
          flex-direction: column;
          column-gap: 1em;
          column-gap: 1em;
          .name {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 0.75em;
            column-gap: 0.5em;
            color: #999a9f;
            .live {
              color: $color-pink;
            }
          }
          .count {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 0.75em;
            column-gap: 0.5em;

            .streaming {
              color: #999a9f;
            }
          }
        }
      }
    }
    .chat {
      grid-area: chat;
      background: $color-pink;
      border-radius: 1.125em;
      padding: 1.5em 1em;
      .title {
        font-size: 1.2em;
        font-weight: 500;
        color: #fff;
      }
      hr {
        height: 1.5px;
        background: #fff;
        border: none;
      }
      .chatbox {
        margin-top: 1em;
        overflow-y: auto;
        max-height: 22em;
        .message {
          display: flex;
          flex-direction: row;
          column-gap: 0.5em;
          font-size: 0.75em;
          margin: 1em 0;
          img {
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
          }
          .sender {
            display: flex;
            flex-direction: column;
            .name {
              font-weight: 450;
              color: #fff;
            }
            .detail {
              background: #fff;
              color: #020c18;
              padding: 0.5em;
              border-radius: 0 0.5em 0.5em 0.5em;
              font-weight: 450;
            }
          }
        }
      }
      & ::-webkit-scrollbar {
        width: 0.1em;
        height: 1px;
      }

      & ::-webkit-scrollbar-track {
        background: $color-pink;
      }

      & ::-webkit-scrollbar-thumb {
        background: #fff;
      }

      & ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
    .comments {
      overflow-y: hidden;
      background: #fff;
      border-radius: 1.125em;
      padding: 0.5em 1em 0.5em 1.5em;
      .content {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 100%;
        .message {
          display: flex;
          flex-direction: row;
          column-gap: 1em;
          font-size: 0.75em;
          margin: 1em 0;
          img {
            width: 3em;
            height: 3em;
            border-radius: 50%;
          }
          .sender {
            display: flex;
            flex-direction: column;
            row-gap: 0.25em;
            .name {
              font-weight: 450;
            }
            .detail {
              background: #fff;
              color: #020c18;
              border-radius: 0 0.5em 0.5em 0.5em;
              font-weight: 450;
            }
          }
        }
      }
      & ::-webkit-scrollbar {
        width: 0.2em;
        height: 1px;
      }

      & ::-webkit-scrollbar-track {
        background: #fff;
      }

      & ::-webkit-scrollbar-thumb {
        background: $color-pink;
        border-radius: 0.5em;
      }

      & ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }

    .suggest {
      grid-area: suggest;
      background: #fff;
      display: flex;
      flex-direction: row;
      padding: 1em;
      border-radius: 1.125em;
      column-gap: 1em;
      .image {
        flex: 1;
        background-color: #00DBDE;
        background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
        border-radius: 1.125em;

      }
      .card {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-evenly;
        .title {
          font-size: 0.875em;
          font-weight: 700;
        }
        .name, .watching {
          font-size: 0.625em;
          font-weight: 450;
          color: #999A9F;
        }
      }
    }
  }
}
</style>