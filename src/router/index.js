import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import MainPageView from '@/components/MainPageView.vue'
import MapView from '@/components/content/MapView.vue'
import CalendarView from '@/components/content/CalendarView.vue'
import BoardView from '@/components/content/BoardView.vue'
import DataIteratorView from '@/components/content/DataIteratorView.vue'
import GalleryView from '@/components/content/GalleryView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: MainPageView,
    },
    {
      path: '/map',
      component: MapView,
    },
    {
      path: '/calendar',
      component: CalendarView,
    },
    {
      path: '/board',
      component: BoardView,
    },
    {
      path: '/dataiterator',
      component: DataIteratorView,
    },
    {
      path: '/gallery',
      component: GalleryView,
    },
  ]
})

export default router