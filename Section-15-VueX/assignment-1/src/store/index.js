import { createStore } from 'vuex';

import authModule from './authModule/index';
import cartModule from './cartModule/index';
import productsModule from './productsModule/index';

const store = createStore({
  modules: {
    authModule,
    cartModule,
    productsModule
  }
});

export default store;
