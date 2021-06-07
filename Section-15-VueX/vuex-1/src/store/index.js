import { createStore } from 'vuex';

import counterModule from './counterModule/index';
import authModule from './authModule/index';

const store = createStore({
  modules: {
    counterModule,
    authModule
  }
});

export default store;
