import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';
import { useRootStore } from '@/stores/storeRoot';

export default function (pinia) {
  const routes = [
    {
      path: '/:pathMatch(.*)*',  // Catch-all route
      name: 'PageNotFound',
      component: NotFoundPage
    },
    {
      path: '/',
      redirect: '/login'  // Redirect from / to /login
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage,
      meta: { requiresAuth: true },
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    const rootStore = useRootStore(pinia);
    const authStore = rootStore.authStore;

    console.log('authStore :>> ', authStore.isLoggedIn);

    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
      next('/login');
    } else {
      next();
    }
  });

  return router;
}
