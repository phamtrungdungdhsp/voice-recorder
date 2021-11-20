<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <div :class="$style.mainTitle">
        <h1>Publish your event</h1>
      </div>
      <div :class="$style.banner">
        <div :class="$style.image">
          <img src="~@/assets/images/category.png" alt="" />
        </div>
        <div :class="$style.info">
          <p :class="$style.title">Your Event name title</p>
          <p :class="$style.time">Monday, 01 November 2022 at 07.00 AM</p>
          <div :class="$style.ticket">
            <box-icon type="solid" name="wallet"></box-icon>
            <p>1250 Tickets</p>
          </div>
          <div :class="$style.attendees">
            <box-icon type="solid" name="group"></box-icon>
            <p>985 Attendees</p>
          </div>
        </div>
      </div>
      <div :class="$style.options">
        <p :class="$style.small">
          Single event happens once and can last multiple days
        </p>
        <select-tag
          :listOption="[
            {
              title: 'Public',
              description: 'Shared on Eventbrite and search engines',
            },
            {
              title: 'Private',
              description: 'Only available to a selected audience',
            },
          ]"
        />
      </div>
      <div :class="$style.options">
        <p :class="$style.small">
          Single event happens once and can last multiple days
        </p>
        <select-tag
          :listOption="[
            { title: 'Publish Now', description: '' },
            { title: 'Schedule Later', description: '' },
          ]"
        />
      </div>
      <div :class="$style.submit">
        <button type="button">Discard Event</button>
        <button type="button" :class="$style.save">Save & Continue</button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import SelectTag from "../components/SelectTag.vue";
export default defineComponent({
  components: {
    SelectTag,
  },
  setup() {},
});
</script>
<style module lang="scss">
.wrapper {
  max-width: 60em;
  min-width: 60em;
  background: $color-gray1;
  padding: 2em 0;
  margin: 2em;
  border-radius: 1.25em;

  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2.75em;

    .mainTitle {
      padding: 0 2em;
      display: flex;
      flex-direction: column;

      h1 {
        color: $color-pink;
        font-size: 2.5em;
        font-weight: 900;
      }

      p {
        color: $color-gray5;
        opacity: 0.5;
        font-size: 1em;
        font-weight: 500;
      }
    }

    .banner {
      margin: 0 2.75em;
      gap: 1em;
      display: flex;
      flex-direction: row;
      border: 1px solid $color-pink;
      border-radius: 0.25em;
      .image {
        flex: 3;
        border-right: 1px solid $color-pink;
        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }

      .info {
        flex: 2;
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        padding: 1em;
        .title {
          color: $color-gray5;
          opacity: 0.5;
          font-weight: 500;
          font-size: 1.125em;
        }
        .time {
          color: $color-gray5;
          opacity: 0.5;
          font-weight: 500;
          font-size: 0.875em;
        }
        .ticket,
        .attendees {
          display: flex;
          flex-direction: row;
          align-items: center;
          column-gap: 0.5em;
          p {
            color: $color-gray5;
            opacity: 0.5;
            font-size: 0.875em;
          }
        }
      }
    }

    .options {
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      padding: 0 2.75em;
    }
    .submit {
      display: flex;
      flex-direction: row;
      gap: 1em;
      width: 100%;
      justify-content: center;
      margin: 2em 0 0;

      button {
        padding: 0.5em;
        border: none;
        border-radius: 0.25em;
        color: #fff;
        background: #d2d2d2;
      }
      .save {
        background: $color-pink;
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .wrapper {
    min-width: unset !important;
  }
}
@media only screen and (max-width: 768px) {
  .wrapper {
    .mainTitle {
      h1 {
        color: $color-pink;
        font-size: 2em !important;
        font-weight: 900;
      }

      p {
        font-size: 0.875em !important;
      }
    }
  }
}

@media only screen and (max-width: 415px) {
  .wrapper {
    margin: 1em;
    .container {
      .mainTitle {
        padding: 0 1em;
      }
      .banner {
        margin: 0 1em;
        flex-direction: column;
        gap: 0;
        .image {
          flex: 1;
          border-right: none;
          border-bottom: 1px solid $color-pink;
        }
        .info {
          flex: 1;
          row-gap: 0.5em;
        }
      }
    }
  }
}
</style>