import { InjectionKey } from '@vue/runtime-core';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
interface IAudio {
  id?: number,
  url?: string,
  name: string,
  category: string
}

function* generateId (id: number) {
  let index: number = id;
  while (true) {
    yield index++;
  }
  return index;
}
const increamentId = generateId(1);

export interface State {
  audioUrls: IAudio[]
}

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state(): State {
    return {
      audioUrls: []
    }
  },
  mutations: {
    add (state: any, payload: IAudio) {
      state.audioUrls.push(payload)
    },
    update (state: any, { id, payload }: { id: number, payload: IAudio }) {
      console.log()
      const index: number = state.audioUrls.findIndex((item: { id: number; }) => item.id === id);
      if (index !== -1) {
        state.audioUrls[index] = Object.assign(state.audioUrls[index], payload);
      }
    }
  },
  actions: {
    addUrl ({ commit }, data: IAudio): number {
      const id: number = increamentId.next().value;
      commit('add', { id, ...data });
      return id;
    },
    updateUrl ({ commit }, { id, payload }: { id: number, payload: IAudio }): void {
      commit('update', { id, payload });
    }
  }
});
