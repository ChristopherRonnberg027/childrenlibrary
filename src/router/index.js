import Vue from 'vue'
import VueRouter from 'vue-router'
import BookInformation from '../views/BookInformation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/bookinformation/:id',
    name: 'Bookinformation',
    component: BookInformation, props: true
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
