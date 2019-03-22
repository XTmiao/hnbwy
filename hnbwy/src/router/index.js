import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GaiKuang from '@/components/GaiKuang'
import XueShu from '@/components/XueShu'
import ZiXun from '@/components/ZiXun'
import ZhanLan from '@/components/ZhanLan'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/zixun'
    },
    {
    	path: '/zixun',
      //name: 'zixun',
    	component: ZiXun
    },
    {
    	path: '/GaiKuang',
    	component: GaiKuang
    },
    {
    	path: '/ZhanLan',
    	component: ZhanLan
    },
    {
    	path: '/XueShu',
    	component: XueShu
    }
  ]
})
