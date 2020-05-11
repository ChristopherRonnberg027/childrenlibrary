import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',
    component: About, props: true
  },
  {
    path: '/bookshelf',
    name: 'Bookshelf',
    component: () => import('../views/BookShelf.vue')
  },
  {
    path: '/bookpresentation',
    name: 'BookPresentation',
    component: () => import('../views/BookPresentation.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
