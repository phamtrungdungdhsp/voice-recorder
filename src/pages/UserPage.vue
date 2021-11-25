<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <div :class="$style.left">
        <p :class="$style.memberType">Paid Membership</p>
        <div :class="$style.notification">
          <img src="~@/assets/images/icons/bell.svg" alt="" />
          <div :class="$style.badge"><span>12</span></div>
        </div>
        <div :class="$style.avatar">
          <img src="~@/assets/images/avatar.png" alt="" />
          <p :class="$style.name">Jasmine Statham</p>
          <p :class="$style.job">Programmer - Ruby, Phyton Developer</p>
          <div :class="$style.location">
            <box-icon
              type="solid"
              name="edit-location"
              cssSize="28px"
              color="#999A9F"
            ></box-icon>
            <p>London, United Kingdom.</p>
          </div>
        </div>
        <hr />
        <div :class="$style.aboutMe">
          <img
            :class="$style.visualizer"
            src="~@/assets/images/visualize.png"
            alt=""
          />
          <p :class="$style.title">About me</p>
          <div :class="$style.description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              dolores, facere nisi amet ipsum quidem incidunt voluptatem fugiat
              ratione eveniet ipsam...
            </p>
            <div :class="$style.blur"></div>
          </div>
          <div :class="$style.more">
            <p>See More</p>
            <div :class="$style.pencil">
              <img src="~@/assets/images/icons/edit.svg" alt="" />
            </div>
          </div>
        </div>
        <hr />

        <!-- features -->
        <div :class="$style.features">
          <p :class="$style.title">Your Features</p>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/envelop.svg" alt="" />
            </div>
            <p>Direct Message</p>
          </div>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/world.svg" alt="" />
            </div>
            <p>World Directory</p>
          </div>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/podcast.svg" alt="" />
            </div>
            <p>Podcast</p>
          </div>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/chat_room.svg" alt="" />
            </div>
            <p>Chat Room</p>
          </div>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/event.svg" alt="" />
            </div>
            <p>Create Event</p>
          </div>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/job_posting.svg" alt="" />
            </div>
            <p>Job Posting</p>
          </div>
          <div :class="$style.item">
            <div :class="$style.icon">
              <img src="~@/assets/images/icons/quang_cao.svg" alt="" />
            </div>
            <p>Advertisement</p>
          </div>
        </div>

        <div :class="$style.suggestion">
          <p :class="$style.title">You may also want to see</p>
          <div :class="$style.box">
            <p :class="$style.sponsored">Sponsored</p>
            <div :class="$style.info">
              <span :class="$style.name">Nora Alexandria</span>
              <span :class="$style.role">Security Lead</span>
            </div>
            <div :class="$style.image">
              <img
                :class="$style.img"
                src="~@/assets/images/avatar.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.right">
        <div :class="$style.top">
          <div :class="$style.menu">
            <div :class="$style.item">
              <img src="~@/assets/images/icons/home.svg" alt="" />
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/live.svg" alt="" />
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/document.svg" alt="" />
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/calendar.svg" alt="" />
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/users.svg" alt="" />
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/folder.svg" alt="" />
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/envelop2.svg" alt="" />
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/eye.svg" alt="" />
            </div>
            <div :class="$style.item">
              <img src="~@/assets/images/icons/advertisement.svg" alt="" />
            </div>
          </div>
        </div>
        <div :class="$style.bot">
          <p :class="$style.title">Your Event History</p>
          <div :class="$style.emptyEvent" v-if="isEmpty">
            <img src="~@/assets/images/icons/event.svg" alt="" />
            <p>You Haven't Create Any Event Yet</p>
          </div>
          <div :class="$style.content" v-else>
            <event-history :active="true" />
            <event-history :active="true" />
            <event-history :active="false" />
            <event-history :active="false" />
          </div>
          <div :class="$style.link">
            <button>Create an event</button>
            <span>Or</span>
            <a href="#">Visit Homepage Event</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import EventHistory from "../components/EventHistory.vue";

export default defineComponent({
  components: {
    EventHistory,
  },
  setup() {
    const isEmpty: Ref<boolean> = ref(false);
    return { isEmpty };
  },
});
</script>
<style module lang="scss">
.wrapper {
  background: #e0e1f4;
  .container {
    width: 60em;
    margin: 3em;
    display: flex;
    gap: 1.5em;
    .left {
      grid-area: left;
      display: flex;
      flex-direction: column;
      position: relative;
      flex: 1;
      p.memberType {
        position: absolute;
        background: $color-pink;
        padding: 0.75em 2.5em;
        border-radius: 2em;
        color: #fff;
        font-size: 0.625em;
        top: -1.5em;
        left: -1.5em;
      }
      .notification {
        position: absolute;
        right: 1em;
        top: 1em;
        .badge {
          position: absolute;
          top: -0.5em;
          right: -0.5em;
          width: 2em;
          height: 2em;
          font-size: 0.625em;
          text-align: center;
          vertical-align: middle;
          border: 1px solid #fff;
          background: #ff5151;
          color: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      hr {
        width: 100%;
        height: 1px;
        border: none;
        background: #e6e6e6;
        margin: 0.5em 0 1em;
      }
      flex: 2;
      background: #fff;
      border-radius: 0.5em;

      .avatar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 4em;
        row-gap: 0.5em;
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
          column-gap: 0.25em;
          color: #999a9f;
        }
      }

      .aboutMe {
        display: flex;
        flex-direction: column;
        row-gap: 0.5em;
        margin: 0.75em 1em 0;
        img.visualizer {
          width: 100%;
          margin: 0 0 1em;
        }
        .title {
          font-size: 0.75em;
          color: #999a9f;
        }
        .description {
          position: relative;
          font-weight: 400;
          p {
            font-size: 0.8125em;
          }
          .blur {
            position: absolute;
            width: 100%;
            height: 3em;
            background-image: linear-gradient(
              to bottom,
              rgba(255, 0, 0, 0),
              rgb(255, 255, 255)
            );
            bottom: 0;
          }
        }
        .more {
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            font-weight: 450;
            font-size: 0.8125em;
            color: #999a9f;
            text-decoration: underline;
            text-underline-offset: 0.25em;
            text-decoration-thickness: 2px;
            cursor: pointer;
          }
          .pencil {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .features {
        display: flex;
        flex-direction: column;
        row-gap: 0.625em;
        margin: 0 1em 1em;
        .title {
          font-size: 0.75em;
          color: #999a9f;
        }
        .item {
          display: flex;
          flex-direction: row;
          align-items: center;
          column-gap: 0.5em;
          font-weight: 450;
          font-size: 0.875em;
          .icon {
            img {
              width: 1.5em;
              height: 1.5em;
              object-fit: fill;
            }
          }
        }
      }

      .suggestion {
        margin: 1em 1em 4em;
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        .title {
          font-size: 0.875em;
        }
        .box {
          width: 10em;
          height: 10em;
          background-image: linear-gradient($color-pink 50%, #fff 50%);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          border-radius: 0.3em;
          position: relative;
          p.sponsored {
            position: absolute;
            color: #fff;
            left: 0.875em;
            top: 0.5em;
            font-size: 0.625em;
          }

          .info {
            position: absolute;
            bottom: 0;
            display: flex;
            height: 25%;
            flex-direction: column;
            justify-content: center;
            span {
              text-align: center;
              margin: 0;
              line-height: 1.25em;
            }
            .name {
              font-weight: 900;
              font-size: 0.875em;
            }
            .role {
              font-size: 0.625em;
            }
          }
          .image {
            width: 5em;
            height: 5em;
            border-radius: 50%;
            border: 2px solid #fff;
            background: red;
            img.img {
              border-radius: 50%;
              width: 100%;
            }
          }
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      flex: 5;
      .top {
        border-radius: 0.5em;
        grid-area: top;
        background: #e0e1f4;
        .menu {
          padding: 0.5em 1em;
          background: #fff;
          border-radius: 0.25em;
          display: flex;
          justify-content: space-between;
          .item {
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
              width: 1.5em;
              height: 1.5em;
              object-fit: fill;
            }
          }
        }

        .content {
          background: #fff;
        }
      }

      .bot {
        background: #fff;
        border-radius: 0.5em;
        padding: 1em;
        height: 100%;
        .title {
          margin: 1em;
          color: $color-pink;
          font-weight: 700;
        }
        .emptyEvent {
          margin: 5em auto 1em;
          width: 10em;
          text-align: center;
          display: flex;
          flex-direction: column;
          row-gap: 2em;
          img {
            width: 10em;
            object-fit: fill;
          }
          p {
            font-weight: 900;
            line-height: 2em;
          }
        }
        .content {
          margin: 1em;
          display: flex;
          flex-direction: column;
          row-gap: 1em;
          margin-bottom: 4em;
        }
        .link {
          display: flex;
          flex-direction: column;
          row-gap: 2em;
          justify-items: center;
          align-items: center;

          button {
            padding: 0.75em 2em;
            background: $color-pink;
            color: #fff;
            font-size: 0.875em;
            font-weight: 500;
            border-radius: 0.5em;
          }
          span {
            font-weight: 300;
            color: #999a9f;
            font-size: 0.875em;
          }

          a {
            font-weight: 500;
            font-size: 0.875em;
            color: $color-pink;
            text-decoration: underline 1.5px;
            text-underline-offset: 0.25em;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 960px){
  .wrapper {
    .container {
      justify-content: center;
      width: unset;
      .left {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 640px){
  .wrapper {
    .container {
      justify-content: center;
      margin: 3em 0.5em;
      width: unset;
      .left {
        display: none;
      }
    }
  }
}
</style>