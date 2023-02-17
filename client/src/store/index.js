import { createStore } from 'vuex';
import { getAllSongs } from '@/services';

const state = {
  user: null,
  token: null,
  isUserLoggedIn: false,
  allSongs: null,
}

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
    if(payload) {
      state.isUserLoggedIn = true;
    } else {
      state.isUserLoggedIn = false;
    }
  },
  All_SONGS(state, payload) {
    state.allSongs = payload;
  }
  // SET_IS_USER_LOGGED_IN(state, payload) {
  //   state.isUserLoggedIn = payload;
  // },
}

const actions = {
  setUserAction({commit}, payload) {
    commit('SET_USER', payload);
  },
  setTokenAction({commit}, payload) {
    commit('SET_TOKEN', payload);
  },
  async setAllSongsAction({commit}) {
    const allSongs = await getAllSongs();
    commit('All_SONGS', allSongs);
  }
}

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;