import { createRouter, createWebHistory } from 'vue-router';

// import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachDetails from './pages/coaches/CoachDetails.vue';
// import CoachContact from './pages/requests/ContactCoach.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
// import NotFound from './pages/NotFound.vue';

import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      path: '/coaches',
      component: () => import('./pages/coaches/CoachesList.vue')
    },
    {
      path: '/coaches/:id',
      component: () => import('./pages/coaches/CoachDetails.vue'),
      props: true,
      children: [
        {
          path: 'contact',
          component: () => import('./pages/requests/ContactCoach.vue')
        } // /coaches/c1/contact
      ]
    },
    {
      path: '/register',
      component: () => import('./pages/coaches/CoachRegistration.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      component: () => import('./pages/requests/RequestsReceived.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      component: () => import('./pages/auth/UserAuth.vue'),
      meta: { requiresUnauth: false }
    },
    { path: '/:notFound(.*)', component: () => import('./pages/NotFound.vue') }
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  }
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    return next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    return next('/coaches');
  } else {
    return next();
  }
});

export default router;
