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
  },
  All_SONGS(state, payload) {
    state.allSongs = payload;
  },
  SET_IS_USER_LOGGED_IN(state, payload) {
    state.isUserLoggedIn = payload;
  },
}

const actions = {
  setUserAction({commit}, payload) {
    commit('SET_USER', payload);
  },
  setTokenAction({commit}, payload) {
    let expires = '';
    let days = 7;
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
    document.cookie = 'token' + "=" + (payload || "")  + expires + "; path=/";
    commit('SET_TOKEN', payload);
  },
  setIsUserLoggedIn({commit}, payload) {
    commit('SET_IS_USER_LOGGED_IN', payload);
  },
  async getAllSongsAction({commit}) {
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