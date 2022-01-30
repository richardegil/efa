export const state = () => ({
    showUI: true,
});

export const mutations = {
  toggleUIState(state) {
      state.showUI = !state.showUI;
  }
}

export const actions = {
  toggleUIState({commit}) {
      commit("toggleUIState");
  }
}

export const getters = {
  getUIState: state => state.showUI,
}

