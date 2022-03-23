<template>
  <div>
    <slide-x-left-transition appear mode="out-in">
      <router-view></router-view>
    </slide-x-left-transition>
    <v-overlay
            :value="overlay"
            opacity="1"
            :color="$vuetify.theme.dark?'#000000':'#ffffff'"
            style="overflow: hidden; z-index: 999;"
    >
      <v-img
              alt="Anonymatch Logo"
              class="align-center"
              src="/img/logo/anonymatch-logo.png"
              width="150"
      />
    </v-overlay>
  </div>
</template>

<script>

  import { SlideYUpTransition,SlideYDownTransition,SlideXLeftTransition } from 'vue2-transitions'
export default {
  name: 'App',
  data: () => ({
    overlay:  false,
    isDark: false
  }),
  created(){
    this.overlay = true;
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if(window.localStorage.getItem('isDark') === undefined){
      this.$vuetify.theme.dark = false;
      window.localStorage.setItem('isDark','false');
      metaThemeColor.setAttribute("content", '#ffffff');
    }else if(window.localStorage.getItem('isDark') === 'true'){
      this.$vuetify.theme.dark = true;
      metaThemeColor.setAttribute("content", '#000000');
    }else{
      this.$vuetify.theme.dark = false;
      metaThemeColor.setAttribute("content", '#ffffff');
    }

  },
  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 4000)
    },
    '$vuetify.theme.dark'(val) {
      let metaThemeColor = document.querySelector("meta[name=theme-color]");
      if(val){
        metaThemeColor.setAttribute("content", '#000000');
        window.localStorage.setItem('isDark','true');
      }else{
        metaThemeColor.setAttribute("content", '#ffffff');
        window.localStorage.setItem('isDark','false');
      }
    }
  },
  metaInfo() {
    return {
      title: "Anonymatch - Relationship made better",
      meta: [

      ]
    }
  },
  components: {
    SlideYUpTransition,
    SlideYDownTransition,
    SlideXLeftTransition,
  }
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Muli:300,400,600,700,800,900');
  html, body{
    overflow-x: hidden;
  }
  * {
    font-family: 'Lato', sans-serif;
    font-weight: normal;
    font-style: normal;
    --scrollbarBG: transparent;
    --thumbBG: #90A4AE;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }
  *::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG) ;
    border-radius: 6px;
    border: 1px solid var(--scrollbarBG);
  }
</style>
