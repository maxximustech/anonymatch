<template>
  <v-app>
    <Header/>
    <v-main>
      <slide-x-left-transition appear mode="out-in">
        <router-view></router-view>
      </slide-x-left-transition>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Home/Header.vue'
import Welcome from '@/components/Home/Welcome.vue'
import Footer from '@/components/Home/Footer.vue'
import { SlideYUpTransition,SlideYDownTransition,SlideXLeftTransition } from 'vue2-transitions'

export default {
  name: 'Home',
  components: {
    Header,
    Welcome,
    Footer,
    SlideYUpTransition,
    SlideYDownTransition,
    SlideXLeftTransition
  }
}
</script>
