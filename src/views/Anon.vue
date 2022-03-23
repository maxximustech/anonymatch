<template>
    <v-app>
        <Header/>
        <v-main>
            <v-card
                    :disabled="getAnonLoading"
            >
                <v-row>
                    <v-col
                            cols="12"
                            lg="3"
                            md="3"
                            class="hidden-sm-and-down pl-5 py-5 col-fixed-left">
                        <v-row>
                            <v-col cols="12"
                                   class="py-0">
                                <v-text-field
                                        solo
                                        label="Search"
                                        append-icon="mdi-magnify"
                                        rounded
                                        clearable
                                ></v-text-field>
                            </v-col>
                            <v-col
                                    cols="12"
                            >
                                <h2 class="font-weight-bold pb-4">
                                    Meet new people
                                </h2>
                                <v-row>
                                    <v-col
                                            v-for="n in 6"
                                            :key="n"
                                            cols="12"
                                            class="py-1"
                                    >
                                        <slide-y-down-transition
                                                appear
                                                :delay="500 + (n * 100)">
                                            <v-card
                                                    width="100%"
                                            >
                                                <v-list-item class="grow pt-2">
                                                    <v-list-item-avatar color="grey darken-3">
                                                        <v-img
                                                                class="elevation-6"
                                                                alt=""
                                                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                        ></v-img>
                                                    </v-list-item-avatar>

                                                    <v-list-item-content>
                                                        <v-list-item-title
                                                                class="font-weight-bold">
                                                            636758955
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                                <v-card-subtitle class="pb-0">
                                                    Number 10
                                                </v-card-subtitle>

                                                <v-card-text class="text--primary pb-0">
                                                    <div>Whitehaven Beach</div>
                                                </v-card-text>

                                                <v-card-actions
                                                        class="justify-end">
                                                    <v-btn
                                                            color="primary"
                                                            text
                                                            @click="updateAnonShowLoginTrue"
                                                    >
                                                        Follow
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </slide-y-down-transition>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col
                            class="py-5 px-0 col-center"
                            cols="12"
                            lg="6"
                            md="6">
                        <slide-x-left-transition appear mode="out-in">
                            <router-view></router-view>
                        </slide-x-left-transition>
                    </v-col>
                    <v-col
                            class="hidden-sm-and-down pr-5 py-5 col-fixed-right"
                            cols="12"
                            lg="3"
                            md="3">
                        <v-card
                                class="mx-auto"
                                max-width="400"
                                :loading="login.loading"
                        >
                            <v-img
                                    class="white--text align-end"
                                    height="200px"
                                    src="/img/bg/bg-10.jpg"
                            >
                                <v-card-title>Sign In to continue</v-card-title>
                            </v-img>
                            <v-form>
                                <v-row class="py-5 px-5">
                                    <v-col cols="12">
                                        <v-text-field
                                                label="Username or Email"
                                                prepend-inner-icon="mdi-account"
                                                :rules="[login.rules.required]"
                                                :error-messages="login.error.email"
                                                clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                            cols="12"
                                    >
                                        <v-text-field
                                                :append-icon="login.showpass ? 'mdi-eye' : 'mdi-eye-off'"
                                                :rules="[login.rules.required]"
                                                :type="login.showpass ? 'text' : 'password'"
                                                name="pass"
                                                label="Password"
                                                class="input-group--focused"
                                                @click:append="login.showpass = !login.showpass"
                                                clearable
                                                prepend-inner-icon="mdi-lock"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                            class="text-left"
                                            cols="6">
                                        <v-btn
                                                class=""
                                                outlined
                                                plain
                                                @click=""
                                        >
                                            <span class="mr-2">Sign In</span>
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="12"
                                           class="text-center">
                                        <v-btn
                                                plain
                                                small
                                                to="/forgot-password"
                                        >
                                            Forgot Password?
                                        </v-btn>
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
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-main>
        <Footer/>
        <v-bottom-sheet
                v-model="getAnonShowLogin"
                inset
                persistent
        >
            <v-sheet
                    class="text-center"
                    min-height="200px"
            >
                <div
                        class="pb-5">
                    <v-list-item class="grow">
                        <v-spacer></v-spacer>
                        <v-btn
                                icon
                                @click="updateAnonShowLoginFalse"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-list-item>
                    <vue-typed-js style="justify-content: center;" :strings="['For Free!', 'Now!']"
                                  :loop="true"
                                  :typeSpeed="60"
                                  :backSpeed="30">
                        <h1 class="font-weight-bold">
                            Join <span class="typing"></span>
                        </h1>
                    </vue-typed-js>
                    <h1 class="display-2 font-weight-bold mb-3">
                        Anonymatch
                    </h1>
                    <p class="subheading font-weight-regular">
                        The top leading Anonymous platform for everyone
                    </p>
                    <v-btn
                            class="ma-2"
                            outlined
                            to="/signin"
                    >
                        <span class="mr-2">Sign In</span>
                    </v-btn>
                    <v-btn
                            class="ma-2"
                            outlined
                            to="/signup"
                    >
                        Sign Up
                    </v-btn>
                </div>
            </v-sheet>
        </v-bottom-sheet>
    </v-app>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Anon/Header.vue'
    import Footer from '@/components/Home/Footer.vue'
    import { SlideYUpTransition,SlideYDownTransition,SlideXLeftTransition } from 'vue2-transitions'
    import { mapGetters } from 'vuex'
    import { VueTypedJs } from 'vue-typed-js'
    import BgAnimate from  '@/components/Home/BgAnimate.vue'

    export default {
        name: 'Home',
        data: ()=>({
            login:  {
                widthPx: window.screen.width * window.devicePixelRatio,
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
            }
        }),
        created(){

        },
        computed: {
            ...mapGetters([
                'getAnonShowLogin',
                'getAnonLoading'
            ])
        },
        methods: {
            updateAnonShowLoginTrue(){
                this.$store.commit('updateAnonShowLogin',true);
            },
            updateAnonShowLoginFalse(){
                this.$store.commit('updateAnonShowLogin',false);
            }
        },
        components: {
            Header,
            Footer,
            SlideYUpTransition,
            SlideYDownTransition,
            SlideXLeftTransition,
            VueTypedJs,
            BgAnimate
        },
        beforeRouteUpdate(to, from, next){
            this.$store.commit('updateAnonLoading',true);
            setTimeout(()=>{
                next();
            },1500)
        }
    }
</script>
<style scoped>
    .bg-gradient {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        height: 100%;
        opacity: 0.3;
        animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    @media only screen and (min-width: 960px){
        .col-fixed-right{
            position: fixed;
            right: 0;
        }
        .col-fixed-left{
            position: fixed;
            top: 70px;
            bottom: 50px;
            left: 0;
            max-height:100%;
            overflow-y: scroll;
        }
        .col-center{
            position:relative;
            left: 25%;
        }
    }
</style>
