import { createStore } from 'vuex';

import authModule from './authModule/index';
import cartModule from './cartModule/index';
import productsModules from './productsModule/index';

const store = createStore({
  modules: {
    authModule,
    cartModule,
    productsModules
  }
});

export default store;
