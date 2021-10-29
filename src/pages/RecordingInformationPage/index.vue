<template>
  <div :class="$style.container">
    <section :class="$style.mainContent">
      <form :class="$style.form" @submit.prevent="save">
        <div :class="$style.fig">
          <ast-ico-mic />
        </div>
        <h2 :class="$style.title">Recording Information</h2>
        <input
          type="text"
          v-model="name"
          :class="$style.formControl"
          placeholder="Name of Recording"
        />
        <input
          type="text"
          v-model="category"
          :class="$style.formControl"
          placeholder="Audio Category"
        />
        <div>
          <button
            type="submit"
            :disabled="!name || !category"
            :class="$style.button"
          >
            Save Recording
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";
import { AUDIO_PROVIDER_SAVE, AUDIO_PROVIDER_SAVE_FUNC } from "store";
import { inject, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const AstIcoMic = defineAsyncComponent(
  () => import("assets/icons/AstIcoMic.vue")
);

export default defineComponent({
  components: {
    AstIcoMic,
  },
  setup() {
    const name = ref("");
    const category = ref("");
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;
    const saveFile: AUDIO_PROVIDER_SAVE_FUNC | undefined =
      inject(AUDIO_PROVIDER_SAVE);
    const save = () => {
      if (!saveFile || !name.value || !category.value) {
        return;
      }
      saveFile(id as string, name.value, category.value);
      router.push("/list");
    };

    console.log(id);
    return {
      name,
      category,
      save,
    };
  },
});
</script>
<style module lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.mainContent {
  width: 30em;
  padding: 3.125em;
  background: rgba(#e8e8e8, 0.9);
  border-radius: 1em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 3px;
  background-image: linear-gradient(-19deg, #e9e8e8, transparent);
}

.fig {
  width: 1.5em;
  height: 1.5em;
  margin: 0 auto;
  fill: #575756;
}

.form {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.formControl {
  padding: 1.25em;
  outline: none;
  border: none;
  border-radius: 1em;
  //box-shadow: -0.2em -0.2em 0.4em -0.1em #fff, 0.2em 0.2em 0.4em -0.1em #b5b5b5;
  border: 1px solid #e5e5e5;
}

.button {
  outline: none;
  border: none;
  border-radius: 4em;
  width: 100%;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  background: $color-pink;
  color: #fff;
  height: 4em;
  box-shadow: -0.2em -0.2em 0.4em -0.1em #fff, 0.2em 0.2em 0.4em -0.1em #b5b5b5;
}

.title {
  margin: 0;
  font-size: 1.4em;
  font-weight: 700;
  color: #000;
}
</style>
