import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Registration from '@/views/Registration.vue';
import Login from '@/views/Login.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Registration',
    path: '/registration',
    component: Registration,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };
