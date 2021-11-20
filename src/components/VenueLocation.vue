<template>
  <div :class="$style.container">
    <div :class="$style.locationForm">
      <form action="">
        <div :class="$style.icon">
          <box-icon name="search" color="#020C18"></box-icon>
        </div>
        <input type="text" placeholder="Your location" />
        <button type="submit">Search</button>
      </form>
    </div>
    <div :class="$style.map">
      <img src="~@/assets/images/map.png" alt="map">
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
  display: flex;
  flex-direction: column;
  row-gap: 1.75em;
  .locationForm {
    display: flex;
    justify-content: center;
    align-items: center;
    form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 0.5em;
      padding: 0.5em 1em;
      border-radius: 0.25em;
      background: #fff;
      border: 1px solid $color-pink;
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
        padding: 1em 3em;
        border-radius: 0.25em;
        font-size: 0.75em;
        font-weight: 550;
      }
    }
  }

  .map {
    width: 100%;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
}

@media screen and (max-width: 415px) {
  .container {
    button {
      padding: 1em 2em !important;
    }
  }
}
@media screen and (max-width: 376px) {
  .container {
    button {
      padding: 1em !important;
    }
  }
}
</style>
