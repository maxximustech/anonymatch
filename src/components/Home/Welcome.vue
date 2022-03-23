<template>
    <v-container
            fluid
            class="pb-10"
             style="background-repeat: no-repeat; background-position: center; background-size: cover; min-height: 900px;"
             :style="{'background-image':'url(img/bg/slider_bg.png)'}">
        <BgAnimate/>
        <v-row class="text-center pl-lg-16 pr-lg-16 pl-md-16 pr-md-16">
                <v-col cols="12" lg="6" md="6" class="d-flex align-center order-2 order-lg-1 order-md-1">
                    <div>
                        <vue-typed-js style="justify-content: center;" :strings="['For Free!', 'Now!']"
                                      :loop="true"
                                      :typeSpeed="60"
                                      :backSpeed="30">
                            <h1 class="font-weight-bold text--white"
                                style="color: white">
                                Join <span class="typing"></span>
                            </h1>
                        </vue-typed-js>
                        <h1 class="display-2 font-weight-bold mb-3 text--white"
                            style="color: white">
                            Anonymatch
                        </h1>
                        <p class="subheading font-weight-regular"
                           style="color: white">
                            The top leading Anonymous platform for everyone
                        </p>
                        <v-btn
                                class="ma-2"
                                outlined
                                color="white"
                                to="/signin"
                        >
                            <span class="mr-2">Sign In</span>
                        </v-btn>
                        <v-btn
                                class="ma-2"
                                outlined
                                color="white"
                                to="/signup"
                        >
                            Sign Up
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" lg="6" md="6" class="d-flex align-center order-1 order-lg-2 order-md-2">
                    <lottie-animation
                            path="lottie/chatting.json"
                            class="hidden-sm-and-up"
                    />
                    <lottie-animation
                            path="lottie/chatting.json"
                            :width="500"
                            :height="500"
                            class="hidden-md-and-down"
                    />
                </v-col>
        </v-row>


    </v-container>
</template>

<script>
    import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
    import { SlideYUpTransition,SlideYDownTransition } from 'vue2-transitions'
    import { VueTypedJs } from 'vue-typed-js'
    import BgAnimate from  '@/components/Home/BgAnimate.vue'
    export default {
        name: 'HelloWorld',

        data: () => ({

        }),
        components: {
            LottieAnimation,
            SlideYUpTransition,
            SlideYDownTransition,
            VueTypedJs,
            BgAnimate
        }
    }
</script>

