import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Trending from '../views/Trending.vue';
import Watch from '../views/Watch.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/trending',
    name: 'Trending',
    component: Trending
  },
  {
    path: '/watch/:id',
    name: 'Watch',
    component: Watch,
    
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
