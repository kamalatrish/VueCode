import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/home/LoginComponent'
import MobHome from '@/components/home/MobHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginComponent
    },
    {
      path: '/mobileHome',
      name: 'MobileHome',
      component: MobHome
    }
  ]
})
