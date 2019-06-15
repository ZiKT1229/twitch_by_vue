import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/lol',
      name: 'lol',
      component: () => import('./views/Lol.vue'),
    },
    {
      path: '/gtav',
      name: 'gtav',
      component: () => import('./views/Gtav.vue'),
    },
    {
      path: '/apex',
      name: 'apex',
      component: () => import('./views/Apex.vue'),
    },
  ],
});
