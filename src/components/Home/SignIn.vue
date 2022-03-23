<template>
    <v-container
            fluid
            class="pb-10">
        <BgAnimate/>
        <v-card
                elevation="4"
                shaped
                class="my-12 mx-lg-16"
                :loading="loading"
                :disabled="loading"
        >
            <v-row class="px-lg-16 px-md-16">
                    <v-col cols="6"
                           class="bounce-shape hidden-sm-and-down">
                        <v-img
                            src="img/bg/login_bg.svg"/>
                    </v-col>
                    <v-col cols="12"
                           class="px-10 px-lg-0 px-md-0"
                           lg="6"
                           md="6">
                        <v-row class="py-5">
                            <v-col cols="12"
                                   >
                                <h1 class="display-5 font-weight-bold mt-3"
                                    :class="$vuetify.theme.dark?'text--white':'text--black'">
                                    Sign In
                                </h1>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                        label="Username or Email"
                                        prepend-inner-icon="mdi-account"
                                        :rules="[rules.required]"
                                        :error-messages="error.email"
                                        clearable
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                            >
                                <v-text-field
                                        :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required]"
                                        :type="showpass ? 'text' : 'password'"
                                        name="pass"
                                        label="Password"
                                        class="input-group--focused"
                                        @click:append="showpass = !showpass"
                                        clearable
                                        prepend-inner-icon="mdi-lock"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6"
                                   class="text-left">
                                <v-btn
                                        plain
                                        small
                                        to="/forgot-password"
                                >
                                    Forgot Password?
                                </v-btn>
                            </v-col>
                            <v-col
                                    class="text-right"
                                    cols="6">
                                <v-btn
                                        class=""
                                        outlined
                                        plain
                                        @click="changeStatus"
                                >
                                    <span class="mr-2">Sign In</span>
                                </v-btn>
                            </v-col>
                            <v-col cols="12"
                                   class="text-center">
                                <v-btn
                                        plain
                                        small
                                        block
                                        to="/signup"
                                >
                                    Create New Account
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
            </v-row>

        </v-card>
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
            showpass: false,
            loading:  false,
            error:  {
                email:  ''
            },
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                min: v => v.length >= 8 || 'Min 8 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
        }),
        watch:  {
            loading (val) {
                val && setTimeout(() => {
                    this.loading = false;
                    this.error.email = ''
                }, 3000)
            },
        },
        methods:    {
            changeStatus(){
                this.loading = true;
                this.error.email = 'Please wait'
            }
        },
        components: {
            LottieAnimation,
            SlideYUpTransition,
            SlideYDownTransition,
            VueTypedJs,
            BgAnimate
        }
    }
</script>
<style scoped>
    .bounce-shape {
        animation: bounce 3s ease-in-out 0s infinite alternate;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-fill-mode: none;
        animation-play-state: running;
        animation-name: bounce;
    }
    @keyframes bounce {
        0% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
        }
        50% {
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        100% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
        }
    }
    .absolute-center {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>

