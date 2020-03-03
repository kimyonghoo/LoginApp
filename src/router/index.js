import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import MyApp from '../components/MyApp'

import Home from '../components/Home'
import Fruit from '../components/biz/Fruit'
import Vege from '../components/biz/Vege'
import User from '../components/biz/User'

import axios from 'axios'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: Login, meta: {authRequired: false}
    },
    {
      path: '/login', component: Login, meta: {authRequired: false}
    },
    {
      path: '/fresh', component: MyApp,  meta: {authRequired: false},
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
        {
          path: 'user',
          name: "user",
          components: {
            content: User
          }
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(function(routeInfo){
    return routeInfo.meta.authRequired;
  }))
  {
    axios.get('/auth/check')
    .then(response => {
      //return 'success'
      console.log(response.data);
      next();
    })
    .catch(error => {
      alert(error.response.data);
    });
  }
  else{
    next();
  }
})
export default router
