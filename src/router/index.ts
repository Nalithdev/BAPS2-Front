import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SignUp from '@/views/SignUpView.vue';
import LogIn from '@/views/LoginView.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
