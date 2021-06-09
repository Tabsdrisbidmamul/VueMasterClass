import { createStore } from 'vuex';

import coachModule from './modules/coaches/index';
import RequestModule from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: RequestModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
