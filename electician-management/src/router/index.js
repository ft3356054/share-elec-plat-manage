import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Page3 from '@/components/page3'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children:[
            {
              path: '/Page1',
              name: 'Page1',
              component: Page1
            },
            {
              path: '/Page2',
              name: 'Page2',
              component: Page2
            },
            {
              path: '/Page3',
              name: 'Page3',
              component: Page3
            }
          ]
    }
]

const router = new VueRouter({
    routes
})

export default router
