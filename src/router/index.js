import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/List';
import NewCamera from '@/components/NewCamera';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
    },
    {
      path: '/new_camera',
      name: 'New Camera',
      component: NewCamera,
    },
  ],
});
