import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Welcome from '@/components/Home/Welcome.vue'
import About from '@/components/Home/About.vue'
import SignIn from '@/components/Home/SignIn.vue'
import SignUp from '@/components/Home/SignUp.vue'
import ForgotPassword from '@/components/Home/ForgotPassword.vue'
import Anon from '@/views/Anon.vue'
import AnonExplore from '@/components/Anon/Explore.vue'
import AnonSearch from '@/components/Anon/Search.vue'
import AnonTimeline from '@/components/Anon/Timeline.vue'
import AnonSinglePost from '@/components/Anon/SinglePost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Welcome',
        component:  Welcome
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
      },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
      }
    ]
  },
  {
    path: '/d/anon',
    component: Anon,
    children: [
      {
        path: '/',
        component:  AnonExplore,
        children: [
          {
            path: '/',
            name: 'AnonTimeline',
            component:  AnonTimeline
          },
          {
            path: '/d/anon/search',
            name: 'AnonSearch',
            component:  AnonSearch
          },
          {
            path: '/d/anon/:id',
            name: 'AnonSinglePost',
            component:  AnonSinglePost
          }
        ]
      },
        ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return {x :0 , y: 0}
    }
  }
})

export default router
