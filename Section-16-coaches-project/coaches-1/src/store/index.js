import { createStore } from 'vuex';

import coachModule from './modules/coaches/index';
import RequestModule from './modules/requests/index';
import authModule from './modules/authModule/index';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: RequestModule,
    auth: authModule
  }
});

export default store;
