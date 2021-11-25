<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <div :class="$style.section1">
        <div :class="$style.card">
          <div :class="$style.image">
            <img src="~@/assets/images/event.png" alt="" />
          </div>
          <div :class="$style.info">
            <p :class="$style.owner">By Trung Dung Pham</p>
            <p :class="$style.title">Event's Name</p>
            <p :class="$style.address">
              Balakosa Coffe & Co. | London | United Kingdom
            </p>
            <p :class="$style.time">Tomorrow at 19:00</p>
            <p :class="$style.price">$100</p>
          </div>
        </div>
        <div :class="$style.register">
          <div :class="$style.left">
            <box-icon type="solid" name="group"></box-icon>
            <p>1025 Followers</p>
          </div>
          <div :class="$style.right">
            <button type="button">Register</button>
          </div>
        </div>
      </div>
      <div :class="$style.section2">
        <div :class="$style.content">
          <p :class="$style.title">About this event</p>
          <div :class="$style.paragraph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etiam
          sit amet nisl purus in mollis nunc. Neque sodales ut etiam sit. Lorem
          dolor sed viverra ipsum. Amet facilisis magna etiam tempor. Purus
          semper eget duis at. Nisi scelerisque eu ultrices vitae auctor eu.
          Neque vitae tempus quam pellentesque nec nam aliquam. Ac feugiat sed
          lectus vestibulum mattis ullamcorper velit sed. Eget duis at tellus at
          urna condimentum mattis. Id semper risus in hendrerit. Mauris vitae
          ultricies leo integer. Sed vulputate odio ut enim blandit volutpat.
          Porttitor rhoncus dolor purus non enim praesent. Est velit egestas dui
          id. Diam maecenas sed enim ut sem viverra aliquet eget sit. Neque
          viverra justo nec ultrices dui. Enim blandit volutpat maecenas
          volutpat blandit aliquam etiam.
          <br />
          <br />
          Et netus et malesuada fames ac turpis egestas maecenas. Phasellus
          faucibus scelerisque eleifend donec pretium vulputate sapien nec.
          Aliquam sem fringilla ut morbi tincidunt augue interdum. Tellus in hac
          habitasse platea dictumst vestibulum rhoncus est pellentesque. Ac orci
          phasellus egestas tellus rutrum tellus pellentesque eu. Tellus id
          interdum velit laoreet id. Rutrum tellus pellentesque eu tincidunt.
          Convallis posuere morbi leo urna molestie. Eget felis eget nunc
          lobortis mattis aliquam. Scelerisque mauris pellentesque pulvinar
          pellentesque habitant morbi. Id diam maecenas ultricies mi eget mauris
          pharetra. Mi quis hendrerit dolor magna eget est lorem ipsum. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Pulvinar mattis
          nunc sed blandit libero volutpat sed cras ornare. Purus viverra
          accumsan in nisl nisi scelerisque eu.
          </div>
          
        </div>
        <div :class="$style.gallery">
          <p>Event Gallery</p>
          <div :class="$style.images">
            <img
              :class="$style.gallery1"
              src="~@/assets/images/gallery1.png"
              alt=""
            />
            <img
              :class="$style.gallery2"
              src="~@/assets/images/gallery2.png"
              alt=""
            />
            <img
              :class="$style.gallery3"
              src="~@/assets/images/gallery3.png"
              alt=""
            />
            <img
              :class="$style.gallery4"
              src="~@/assets/images/gallery4.png"
              alt=""
            />
            <img
              :class="$style.gallery5"
              src="~@/assets/images/gallery5.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div :class="$style.social">
        <p>Share with friend</p>
        <div :class="$style.icons">
          <box-icon name="facebook" type="logo"></box-icon>
          <box-icon type="logo" name="messenger"></box-icon>
          <box-icon name="linkedin" type="logo"></box-icon>
          <box-icon name="link"></box-icon>
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
  max-width: 60em;
  background: $color-gray1;
  padding: 0 0 2em;
  margin: 2em;
  border-radius: 1.25em;

  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2.75em;
    .section1 {
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      justify-content: flex-end;
      align-items: center;
      height: 30em;
      background-image: url('~@/assets/images/background.png');
      background-size: 100% 70%;
      background-repeat: no-repeat;
      .register {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        .left {
          display: flex;
          flex-direction: row;
          align-items: center;
          column-gap: 0.5em;
          color: $color-gray5;
          opacity: 0.5;
          p {
            font-size: 0.875em;
            font-weight: 500;
          }
        }

        .right {
          button {
            padding: 0.5em 2em;
            background: $color-pink;
            color: #fff;
            border-radius: 0.25em;
          }
        }
      }
      .card {
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        margin: 0 2.75em;
        gap: 0.5em;
        display: flex;
        flex-direction: row;
        border-radius: 0.875em;
        padding: 0.5em;
        width: 60%;
        .image {
          flex: 1;
          img {
            width: 100%;
            height: 100%;
            object-fit: fill;
          }
        }

        .info {
          flex: 1.5;
          display: flex;
          flex-direction: column;
          row-gap: 1em;
          padding: 0.5em 0.5em 0;
          justify-content: flex-end;
          .owner {
            font-size: 0.7em;
            color: $color-gray5;
            opacity: 0.5;
            font-weight: 500;
          }
          .title {
            color: $color-gray5;
            opacity: 0.5;
            font-weight: 500;
            font-size: 1.125em;
          }
          .address {
            color: $color-gray5;
            opacity: 0.5;
            font-weight: 500;
            font-size: 0.875em;
          }
          .time,
          .price {
            font-size: 0.875em;
            font-weight: 450;
            color: $color-pink;
          }
        }
      }
    }
    .section2 {
      margin: 0 5em;
      display: flex;
      flex-direction: column;
      row-gap: 1.5em;
      .title {
        color: $color-pink;
        font-size: 2.5em;
        font-weight: 900;
        margin-bottom: 0.5em;
      }
      .paragraph {
        font-size: 1em;
      }
      .gallery {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        p {
          font-size: 0.875em;
          color: $color-gray5;
          opacity: 0.5;
        }
        .images {
          img {
            width: 100%;
          }
          .gallery1 {
            grid-area: gallery1;
          }
          .gallery2 {
            grid-area: gallery2;
          }
          .gallery3 {
            grid-area: gallery3;
          }
          .gallery4 {
            grid-area: gallery4;
          }
          .gallery5 {
            grid-area: gallery5;
          }
          display: grid;
          gap: 0.5em;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas:
            "gallery1 gallery2 gallery3"
            "gallery4 gallery4 gallery5";
        }
      }
    }
    .social {
      display: flex;
      flex-direction: column;
      row-gap: 1em;
      margin: 0 5em;
      p {
        font-size: 0.875em;
        color: $color-gray5;
        opacity: 0.5;
      }
      .icons {
        display: flex;
        flex-direction: row;
        column-gap: 0.5em;
      }
    }
  }
}

@media screen and (max-width: 667px) {
  .wrapper {
    .container {
      .section1 {
        height: 20em;
        background-size: 100% 60%;
        .register {
          width: 80%;
        }
        .card {
          width: 80%;
          .info {
            row-gap: 0.5em;
          }
        }
      }
      .section2 {
        margin: 0 2em;
      }
      .social {
        margin: 0 2em;
      }
    }
  }
}

@media screen and (max-width: 415px) {
  .wrapper {
    margin: 0.25em;
    .container {
      .section1 {
        background-size: 100% 60%;
        .card {
          column-gap: 0.25em;
          .info {
            padding: 0.25em 0.25em 0;
            row-gap: 0.3em;
            .address, .time, .price {
              font-size: 0.7em;
            }
          }
        }
      }
      .social {
        row-gap: 0.25em;
      }
    }
  }
}
</style>
