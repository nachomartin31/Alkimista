import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Dishes from '../views/Dishes.vue';
import Menus from '../views/Menus.vue';
import Wines from '../views/Wines.vue';
import Booking from '../views/Booking.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/dishes',
    name: 'Dishes',
    component: Dishes,
  },

  {
    path: '/menus',
    name: 'Menus',
    component: Menus,
  },
  {
    path: '/wines',
    name: 'Wines',
    component: Wines,
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
