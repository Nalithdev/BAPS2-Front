import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SignUp from '@/views/SignUpView.vue';
import LogIn from '@/views/LoginView.vue';
import Feed from '@/views/FeedView.vue';
import Shop from '@/views/ShopView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'sign-up',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn,
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed,
  },
  {
    path: '/shops/:id',
    name: 'shop',
    component: Shop,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
