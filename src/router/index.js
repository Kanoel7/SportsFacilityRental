import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FacilitiesListView from '@/views/FacilitiesListView.vue'
import FacilityDetailView from '@/views/FacilityDetailView.vue'
import AboutView from '@/views/AboutView.vue'
import BookingsView from '@/views/BookingsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: FacilitiesListView,
    },
    {
      path: '/facilities/:id',
      name: 'facility-detail',
      component: FacilityDetailView,
      props: true,
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: BookingsView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
