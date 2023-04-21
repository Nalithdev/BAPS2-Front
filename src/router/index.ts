import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SignUp from '@/views/SignUpView.vue';
import LogIn from '@/views/LoginView.vue';
import Feed from '@/views/FeedView.vue';
import Shop from '@/views/ShopView.vue';
import Shops from '@/views/ShopsView.vue';
import Profile from '@/views/ProfileView.vue';

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
    path: '/shops',
    name: 'shops',
    component: Shops,
  },
  {
    path: '/shops/:id',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
