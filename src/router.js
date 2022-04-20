import {createRouter, createWebHistory} from 'vue-router';
import Tasks from './views/Tasks.vue';
import New from './views/New.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/new',
      name: 'New',
      component: () => import('../src/views/New.vue')
    },
    {
      path: '/task/:id',
      name: 'Task',
      component: () => import('../src/views/Task.vue')
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
