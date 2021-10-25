import { computed, provide, inject, reactive } from 'vue';

function* generateId(id: number) {
  let index: number = id;
  while (true) {
    yield index++;
  }
  return index;
}
const increamentId = generateId(1);
export const initStore = () => {
  // State
  const state: any = reactive({
    audioUrls: []
  });

  // Getters
  const audioUrls = computed(() => state.audioUrls);

  // Actions
  const create = (url: string): number => {
    const id: number = increamentId.next().value;
    state.audioUrls.push({ id, url });
    return id;
  }

  const update = (id: number, name: string, category: string) => {
    const index: number = state.audioUrls.findIndex((item: { id: number; }) => item.id === id);
    if (index !== -1) {
      state.audioUrls[index] = Object.assign(state.audioUrls[index], { name, category });
    }
  }


  // Provider
  provide('getList', audioUrls);
  provide('createUrl', create);
  provide('updateUrl', update);
  return state;
}

// create store
export const useStore = () => ({
  // Injection
  getList: inject('getList'),
  createUrl: inject('createUrl'),
  updateUrl: inject('updateUrl')
});
