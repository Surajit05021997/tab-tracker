import { createRouter, createWebHistory } from 'vue-router';
import Registration from '@/views/Registration.vue';
import Login from '@/views/Login.vue';
import Songs from '@/views/Songs.vue';
import CreateSong from '@/views/CreateSong.vue';
import ViewSong from '@/views/ViewSong.vue';
import EditSong from '@/views/EditSong.vue';

const routes = [
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
  {
    name: 'Songs',
    path: '/songs',
    component: Songs,
  },
  {
    name: 'CreateSong',
    path: '/create-song',
    component: CreateSong,
  },
  {
    name: 'ViewSong',
    path: '/song/:id',
    component: ViewSong,
  },
  {
    name: 'EditSong',
    path: '/song/edit/:id',
    component: EditSong,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'Songs',
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };
