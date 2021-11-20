<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <!-- section 1 -->
      <div :class="[$style.section, $style.section2]">
        <!-- main title -->
        <div :class="$style.mainTitle">
          <h1>Basic Information About Your Event.</h1>
          <p>
            Name your event and tell event-goers why they should come. Add
            details that highlight what makes it unique.
          </p>
        </div>
        <form-input
          label="Write your event titles here"
          placeholder="Your event name"
          :required="true"
        />
        <form-input
          label="Write you organizer"
          placeholder="Your event organizer"
          :required="true"
          description="This profile describes a unique organiser and shows all of the events on one page"
        />
        <form-input-tag
          label="Add tags to your event"
          description="Improve discoverability of your event by adding tags relevant to the subject matter."
          :required="false"
        />
        <hr :class="$style.hrTag" />
      </div>

      <!-- section 2 -->
      <div :class="[$style.section, $style.section2]">
        <div :class="$style.mainTitle">
          <h1>Location About Your Event.</h1>
          <p>
            Help people in the area discover your event and let attendees know
            where to show up.
          </p>
        </div>
        <div :class="$style.listTags">
          <button :class="[$style.buttonTab, $style.active]">Venue</button>
          <button :class="$style.buttonTab">Online Event</button>
          <button :class="$style.buttonTab">To be announced</button>
        </div>
        <div :class="$style.venue">
          <div :class="$style.location">
            <label :class="$style.title">Venue Location</label>
            <venue-location />
          </div>
          <form-input
            label="Venue Name"
            placeholder="Your venue location name"
            :required="false"
          />
        </div>

        <div :class="$style.streetAddress">
          <div :class="$style.mainTitle">
            <h1>Street Address</h1>
          </div>
          <div :class="$style.address">
            <form-input
              label="Address 1"
              placeholder="Address 1"
              :required="false"
            />
            <form-input
              label="Address 2"
              placeholder="Address 2"
              :required="false"
            />
            <form-input
              label="Town/City"
              placeholder="Town/City"
              :required="false"
            />
            <div :class="$style.country">
              <form-input
                label="County"
                placeholder="County"
                :required="false"
              />
              <form-input
                label="Postal Code"
                placeholder="Postal Code"
                :required="false"
              />
            </div>
            <form-input
              label="Country"
              placeholder="Country"
              :required="false"
            />
          </div>
        </div>
        <hr :class="$style.hrTag" />
      </div>

      <!-- section 3 -->
      <div :class="[$style.section, $style.section3]">
        <div :class="$style.mainTitle">
          <h1>Date And Time Your Event.</h1>
          <p>
            Tell event-goers when your event starts and ends so they can make
            plans to attend.
          </p>
        </div>
        <div :class="$style.listTags">
          <button :class="[$style.buttonTab, $style.active]">
            Single Event
          </button>
          <button :class="$style.buttonTab">Recurring Event</button>
        </div>
        <p :class="$style.small">
          Single event happens once and can last multiple days
        </p>
        <select-tag
          :listOption="[
            { title: 'Display Start Events', description: 'The start time of your event will be displayed to attendees.' },
            { title: 'Display End Time', description: 'The end time of your event will be displayed to attendees.' },
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
import FormInput from "../components/FormInput.vue";
import FormInputTag from "../components/FormInputTag.vue";
import VenueLocation from "../components/VenueLocation.vue";
import SelectTag from "../components/SelectTag.vue";

export default defineComponent({
  components: {
    FormInput,
    FormInputTag,
    VenueLocation,
    SelectTag
  },
  setup() {},
});
</script>

<style module lang="scss">
.wrapper {
  max-width: 60em;
  background: $color-gray1;
  padding: 2em 0;
  margin: 2em;
  border-radius: 1.25em;
  .hrTag {
    height: 1px;
    width: 100%;
    background: #a5a5a5;
    opacity: 0.3;
  }
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2.75em;

    .mainTitle {
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

    .section {
      display: flex;
      flex-direction: column;
      padding: 0 4em;
      row-gap: 1.875em;
    }

    .listTags {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 2em;
      .buttonTab {
        background: #fff;
        border: 1px solid $color-pink;
        font-size: 1.25em;
        color: #171717;
        opacity: 0.5;
        padding: 1.25em 3em;
        border-radius: 0.25em;
        font-weight: 550;
      }
      & .active {
        background: rgba(249, 57, 117, 0.1);
      }
    }

    .venue {
      display: flex;
      flex-direction: column;
      row-gap: 2.375em;
      .location {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        .title {
          font-size: 1.25em;
          font-weight: 500;
        }
      }
    }

    .streetAddress {
      display: flex;
      flex-direction: column;
      row-gap: 2em;

      .address {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;

        .country {
          display: flex;
          flex-direction: row;
          width: 100%;
          column-gap: 1.5em;
        }
      }
    }

    .eventSelect {
      display: flex;
      flex-direction: column;
      row-gap: 2em;

      .input {
        display: flex;
        flex-direction: row;
        column-gap: 2em;
        .des {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .title {
            font-size: 1.25em;
            font-weight: 500;
          }
          .small {
            font-size: 1em;
            color: $color-gray5;
            opacity: 0.5;
          }
        }
        .container {
          display: flex;
          position: relative;
          width: 2em;
          height: 2em;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            &:checked {
              ~ {
                .checkmark {
                  background-color: $color-pink;
                  &:after {
                    display: block;
                  }
                }
              }
            }
          }
          &:hover {
            input {
              ~ {
                .checkmark {
                  background-color: $color-pink;
                }
              }
            }
          }
          .checkmark {
            &:after {
              left: 50%;
              top: 55%;
              width: 10px;
              height: 20px;
              border: solid white;
              border-width: 0 3.5px 3.5px 0;
              -webkit-transform: rotate(45deg) translate(-120%, -40%);
              -ms-transform: rotate(45deg) translate(-120%, -40%);
              transform: rotate(45deg) translate(-120%, -40%);
            }
          }
        }
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 2em;
          width: 2em;
          border: 1px solid $color-pink;
          border-radius: 0.5em;
          &:after {
            content: "";
            position: absolute;
            display: none;
          }
        }
      }
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

@media only screen and (max-width: 768px) {
  .wrapper {
    .section {
      padding: 0 3em;
      .streetAddress {
        .address {
          grid-template-columns: 1fr;
        }
      }
      .listTags {
        gap: 1em;
        .buttonTab {
          padding: 1em 2em;
        }
      }
    }
  }
}

@media only screen and (max-width: 415px) {
  .wrapper {
    margin: 1em;
    .mainTitle {
      h1 {
        color: $color-pink;
        font-size: 2em;
        font-weight: 900;
      }
    }
    .section {
      padding: 0 1em !important;
      .streetAddress {
        .address {
          grid-template-columns: 1fr;
          .country {
            flex-direction: column;
          }
        }
      }
      .listTags {
        gap: 1em;
        .buttonTab {
          padding: 1em 2em;
        }
      }
    }
  }
}
</style>
