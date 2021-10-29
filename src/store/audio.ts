import { provide, ref, Ref, readonly, defineComponent } from "vue";

/** Use Symbols */
export const AUDIO_PROVIDER_GET = Symbol("AUDIO_PROVIDER_GET");
export const AUDIO_PROVIDER_SAVE = Symbol("AUDIO _PROVIDER_ADD");

export default defineComponent({
  setup() {
    const state: Ref<AudioSource[]> = ref([]);

    const add: AUDIO_PROVIDER_SAVE_FUNC = (
      url: string,
      name: string,
      category: string
    ) => {
      state.value = [...state.value, { url, name, category }];
      console.log(state.value);
    };

    provide(AUDIO_PROVIDER_GET, readonly(state));
    provide(AUDIO_PROVIDER_SAVE, add);
  },

  render() {
    if (!this.$slots.default) {
      return;
    }
    return this.$slots.default();
  },
});

export type AUDIO_PROVIDER_SAVE_FUNC = (
  url: string,
  name: string,
  category: string
) => void;

export interface AudioSource {
  name: string;
  category: string;
  url: string;
}
