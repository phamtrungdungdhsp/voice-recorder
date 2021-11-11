<template>
  <div :class="$style.container">
    <section :class="$style.left">
      <div :class="$style.containImg">
        <img :src="require('@/assets/images/woman.svg')" :class="$style.image"/>
      </div>
    </section>
    <section :class="$style.right">
      <div :class="$style.title">
        <h3 :class="[$style.bold, $style.txtLg]">Quick Security Check</h3>
        <p :class="$style.small">We just need some additional info to confirm it's you</p>
      </div>
      <div :class="$style.step1" v-if="step === 1">
        <div :class="$style.options">
          <div :class="[$style.option, $style.option1]">
            <label :class="$style.radioButton">
              <input type="radio" name="option" v-model="selection" :value="options.CALL"/>
              <div :class="$style.remark" v-if="selection === options.CALL"></div>
            </label>
            <div :class="$style.description">
              <p :class="$style.semibold">Have us call you</p>
              <p :class="$style.small">
                We'll show you a code on the next screen. <br />
                Use it when you get our call.
              </p>
              <div :class="[$style.semibold, $style.phone]">
                <p>Mobile (982) 1245-1234</p>
                <span :class="$style.change">Change</span>
              </div>
            </div>
          </div>
          <div :class="[$style.option, $style.option2]">
            <label :class="$style.radioButton">
              <input type="radio" name="option" v-model="selection" checked :value="options.TEXT"/>
              <div :class="$style.remark" v-if="selection === options.TEXT"></div>
            </label>
            <p :class="$style.semibold">Receive a text</p>
          </div>
          <div :class="[$style.option, $style.option3]">
            <label :class="$style.radioButton">
              <input type="radio" name="option" v-model="selection" :value="options.EMAIL"/>
              <div :class="$style.remark" v-if="selection === options.EMAIL"></div>
            </label>
            <p :class="$style.semibold">Receive an email</p>
          </div>
        </div>
        <div :class="$style.identity" v-if="selection !== options.CALL">
          <p :class="[$style.bold, $style.txtMd]">Confirm your identity</p>
          <input type="text" placeholder="Receive a text" v-if="selection === options.TEXT" :class="$style.inputDropdown"/>
          <input type="text" placeholder="Receive a email" v-if="selection === options.EMAIL" :class="$style.inputDropdown"/>
          <p :class="$style.small">You will receive a text message with a security code shortly after you click 
            <span :class="$style.semibold">I Agree to Receive.</span>
          </p>
          <input type="text" placeholder="Please select a phone number" v-if="selection === options.TEXT" :class="$style.inputDropdown" />
          <input type="text" placeholder="Insert your email" v-if="selection === options.EMAIL" :class="$style.inputDropdown" />
        </div>
      </div>
      <div :class="$style.step2" v-if="step === 2">
        <p :class="[$style.semibold, $style.txtMd]">Enter a verification code</p>
        <p :class="$style.small">Write a verification code that you receive from text message</p>
        <input type="text" placeholder="Insert the verification code" :class="$style.inputLg"/>
      </div>
      <button :class="[$style.bold, $style.nextButton]" @click="step = 2" v-if="step === 1">Next</button>
      <button :class="[$style.bold, $style.nextButton]" v-if="step === 2">Done</button>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const options = {
      CALL: 1,
      TEXT: 2,
      EMAIL: 3
    }
    const selection = ref(options.CALL)
    const step = ref(1)
    return { options, selection, step };
  },
});
</script>
<style module lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    width: 54em;
    margin: auto;
    column-gap: 3em;
    min-height: 100vh;
  }

  .semibold {
    font-weight: 600;
  }

  .bold {
    font-weight: 700;
    
  }
  .txtLg {
    font-size: 1.75em;
  }

  .txtMd {
    font-size: 1.5em;
  }
  .small {
    font-size: 0.875em;
    color: $color-gray3;
  }

  input[type="text"] {
    border: 1px solid $color-gray4;
    padding: 0.5em 1em;
    font-size: 0.875em;
    outline: none;
  } :focus {
      border-color: red !important;
  }
  .inputLg {
    padding: 1em !important;
    border-radius: 0.25em;
  }
  
  .left {
    flex: 1;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    .containImg {
      .image {
        width: 23em;
        object-fit: contain;
      }
    }
  }

  .right {
    flex: 1;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1.75em;

    .title {
      display: flex;
      flex-direction: column;
      row-gap: 0.5em;
    }
    .step1 {
      display: flex;
      flex-direction: column;
      row-gap: 2em;
      .options {
        display: flex;
        flex-direction: column;
        row-gap: 1.75em;
        font-size: 1em;
        .option {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          column-gap: 1.5em;
          label.radioButton {
            width: 1.3em;
            height: 1.3em;
            border: 1px solid $color-gray4;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            input[type="radio"] {
              display: none;
            }
            .remark {
              width: 1em;
              height: 1em;
              border: 1px solid $color-gray4;
              border-radius: 50%;
              background: $color-pink;
            }

          }

          .description {
            display: flex;
            flex-direction: column;
            row-gap: 0.25em;
            flex: 1;
          }
          span.change {
            color: $color-pink;
            cursor: pointer;
          }
          .phone {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
    }
    .step2 {
      display: flex;
      flex-direction: column;
      row-gap: 1em;
    }
    .identity {
      display: flex;
      flex-direction: column;
      row-gap: 1.75em;
    }
    .nextButton {
      padding: 1em 2em;
      border: none;
      border-radius: 28px;
      font-size: 1.125em;
      background: $color-pink;
      color: $color-white;
    }
  }

  // responsive
  @media only screen and (max-width: 763px) {
    .container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .left {
        flex: unset;
        .containImg {
            .image {
              width: 10em;
              object-fit: contain;
            }
          }
      }
      .right {
        flex: unset;
      }
    }
  }
</style>