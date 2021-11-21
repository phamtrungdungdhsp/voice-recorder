<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <div :class="$style.header">
        <!-- head bar -->
        <div :class="$style.headbar">
          <ul :class="[$style.menuHead, $style.fEnd]">
            <li :class="$style.active">Goes LIVE</li>
            <li>Create an Event</li>
            <li>Help</li>
          </ul>
        </div>

        <!-- slider -->
        <slider />
      </div>

      <!-- menu -->
      <div :class="$style.menu">
        <div :class="$style.title">
          <h3 :class="$style.search">What's popular in</h3>
          <div :class="$style.locationForm">
            <form action="">
              <div :class="$style.icon">
                <box-icon name="search" color="#020C18"></box-icon>
              </div>
              <input type="text" placeholder="Your location" />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <ul :class="[$style.menuList, $style.fStart]">
          <li :class="tab === 'all' ? $style.active : ''">All</li>
          <li :class="tab === 'justForYou' ? $style.active : ''">
            Just For You
          </li>
          <li :class="tab === 'online' ? $style.active : ''">Online</li>
          <li :class="tab === 'todayPopular' ? $style.active : ''">
            Today Popular
          </li>
          <li :class="tab === 'thisWeek' ? $style.active : ''">This week</li>
          <li :class="tab === 'free' ? $style.active : ''">Free</li>
          <li :class="tab === 'jobVacany' ? $style.active : ''">Job Vacany</li>
          <li :class="tab === 'podcast' ? $style.active : ''">Podcast</li>
          <li :class="tab === 'videoBlogs' ? $style.active : ''">
            Video Blogs
          </li>
        </ul>
      </div>

      <!-- event in -->
      <div :class="$style.eventWrapper">
        <div :class="$style.event">
          <h3 :class="$style.title">Event in London, United Kingdom</h3>
          <div :class="$style.listEvent">
            <event-card />
            <event-card />
            <event-card />
            <event-card />

            <event-card />
            <event-card />
            <event-card />
            <event-card />
          </div>
        </div>

        <!-- more event -->
        <div :class="$style.event">
          <h3 :class="$style.title">More Events</h3>
          <div :class="$style.listEvent">
            <event-card />
            <event-card />
            <event-card />
            <event-card />
          </div>
        </div>

        <!-- see more -->
        <div :class="$style.center">
          <button type="button" :class="$style.seemore">See more</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import Slider from "../components/Slider.vue";
import EventCard from "../components/EventCard.vue";

export default defineComponent({
  components: {
    Slider,
    EventCard,
  },
  setup() {
    const tab = ref("all");
    const currentTab = ref("all");
    return { tab, currentTab };
  },
});
</script>

<style module lang="scss">
.wrapper {
  max-width: 60em;
  background: $color-gray1;
  padding: 2em 0;
  margin: 2em;
  border-radius: 1.25em;
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2.75em;
    .header {
      display: flex;
      flex-direction: column;
      row-gap: 2em;
      .headbar {
        padding: 0 2em;
      }
    }
    ul.menuHead {
      display: flex;
      flex-direction: row;
      column-gap: 2em;
      width: 100%;
      align-items: center;
      font-weight: 700;
      font-size: 1em;
      cursor: pointer;
      li {
        transition: all 0.3s ease-in;
      }
      .active {
        color: $color-pink;
      }
      & :hover {
        color: $color-pink;
      }
    }
    ul.menuList {
      display: flex;
      flex-direction: row;
      gap: 1.5em;
      width: 100%;
      align-items: center;
      font-weight: 500;
      font-size: 1em;
      cursor: pointer;
      flex-wrap: wrap;
      li {
        transition: all 0.3s ease-in;
        position: relative;
      }
      .active {
        color: $color-pink;
      }
      & ::after {
        content: "";
        background: $color-pink;
        width: 0%;
        height: 1.5px;
        position: absolute;
        bottom: -3px;
        right: 50%;
        opacity: 1;
        transition: all 0.3s, ease-in;
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        -o-transition: all 0.3s ease-in;
      }
      & ::before {
        content: "";
        background: $color-pink;
        width: 0%;
        height: 1.5px;
        position: absolute;
        bottom: -3px;
        left: 50%;
        opacity: 1;
        transition: all 0.3s, ease-in;
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        -o-transition: all 0.3s ease-in;
      }
      :hover {
        color: $color-pink;
        position: relative;
      }
      :hover::after {
        width: 50%;
      }
      :hover::before {
        width: 50%;
      }
      .active::after {
        width: 50%;
      }
      .active::before {
        width: 50%;
      }
    }
    & .fStart {
      justify-content: flex-start;
    }
    & .fEnd {
      justify-content: flex-end;
    }

    .menu {
      display: flex;
      flex-direction: column;
      padding: 0 3em;
      row-gap: 1.5em;

      .title {
        display: flex;
        flex-direction: row;
        column-gap: 1em;
        flex-wrap: nowrap;

        .search {
          color: $color-pink;
          font-size: 2.5em;
          font-weight: 900;
          white-space: nowrap;
        }
      }

      .locationForm {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        form {
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
    }
    .eventWrapper {
      display: flex;
      flex-direction: column;
      row-gap: 6em;
      .event {
        display: flex;
        flex-direction: column;
        row-gap: 2em;
        padding: 0 3em;

        .title {
          font-size: 1.5em;
          font-weight: 900;
          color: $color-pink;
        }

        .listEvent {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1em;
        }
      }

      .center {
        display: flex;
        justify-content: center;
        align-items: center;
        .seemore {
          text-align: center;
          padding: 0.875em 10em;
          border: 1px solid $color-gray5;
          border-radius: 0.3em;
          color: $color-gray5;
          opacity: 0.5;
          font-weight: 600;
          font-size: 1em;
          background: #fff;
        }
      }
    }
  }
}

/** responsive */
@media only screen and (max-width: 768px) {
  .wrapper {
    .menuHead {
      font-size: 0.875em !important;
    }
    .menu {
      padding: 0 1em;
      .search {
        font-size: 2em !important;
        white-space: nowrap;
      }
    }
  }

  .eventWrapper {
    row-gap: 3em !important;
    .event {
      padding: 0 1em;
      .listEvent {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }
  }
}
@media only screen and (max-width: 415px) {
  .wrapper {
    max-width: 95vw;
    margin: 0.5em;
    .menuHead {
      font-size: 0.875em !important;
    }
    .container {
      .menu {
        padding: 0 1em;
        .search {
          font-size: 2px;
          white-space: nowrap;
        }
        .title {
          flex-direction: column;
        }
      }
      .listEvent {
        display: grid;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 1em;
      }
      .eventWrapper {
        .event {
          padding: 0 1em;
        }
      }
    }

    .center {
      .seemore {
        text-align: center;
        padding: 0.875em 2em !important;
        border: 1px solid $color-gray5;
        border-radius: 0.3em;
        color: $color-gray5;
        opacity: 0.5;
        font-weight: 600;
        font-size: 1em;
        background: #fff;
      }
    }
  }
}
</style>
