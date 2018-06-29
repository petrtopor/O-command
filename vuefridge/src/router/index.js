import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calendar from '@/components/Calendar'
import Cart from '@/components/Cart'
import Book from '@/components/Book'
import Qrcode from '@/components/Qrcode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/qrcode',
      name: 'Qrcode',
      component: Qrcode
    }
  ]
})
