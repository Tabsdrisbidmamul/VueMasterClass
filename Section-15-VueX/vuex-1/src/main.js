import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      currentUser: null
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    incrementByValue(state, payload) {
      state.counter += payload.value;
    },
    login(state, payload) {
      state.currentUser = payload;
    },
    logout(state) {
      state.currentUser = null;
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    incrementByValue(context, payload) {
      // setTimeout(() => {}, 2000);
      context.commit('incrementByValue', payload);
    },
    login(context, payload) {
      console.log(payload);
      context.commit('login', payload);
    },
    logout(context) {
      context.commit('logout');
    }
  },
  getters: {
    counter(state) {
      return state.counter * 10;
    },
    normalizedCounter(_, getters) {
      const counter = getters.counter;
      if (counter < 0) return 0;
      if (counter > 100) return 100;
      return counter;
    },
    isAuth(state) {
      return state.currentUser;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
