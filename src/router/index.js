import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import MyApp from '../components/MyApp'

import Home from '../components/Home'
import Fruit from '../components/biz/Fruit'
import Vege from '../components/biz/Vege'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: Login
    },
    {
      path: '/login', component: Login
    },
    {
      path: '/fresh', component: MyApp,
      children: [
        {
          path: '',
          name: "home",
          components: {
            content: Home
          }
        },
        {
          path: 'fruit',
          name: "fruit",
          components: {
            content: Fruit
          }
        },
        {
          path: 'vege',
          name: "vege",
          components: {
            content: Vege
          }
        },
      ]
    },

  ]
})
export default router
