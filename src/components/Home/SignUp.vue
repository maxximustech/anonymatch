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
                                    src="img/bg/signup_bg.svg"/>
                        </v-col>
                             <v-col cols="12"
                                    class="px-10 px-lg-0 px-md-0"
                                    lg="6"
                                    md="6">
                                 <slide-x-left-transition group mode="out-in">
                                     <v-form
                                             ref="form"
                                             key="signup"
                                             v-model="valid"
                                             lazy-validation
                                     >
                                        <v-row v-if="step == 1"
                                            class="py-5">
                                             <v-col cols="12"
                                             >
                                                 <h1 class="display-5 font-weight-bold mt-3"
                                                     :class="$vuetify.theme.dark?'text--white':'text--black'">
                                                     Sign Up
                                                 </h1>
                                             </v-col>
                                             <v-col cols="12">
                                                 <v-text-field
                                                         ref="usertext"
                                                         label="Username"
                                                         prepend-inner-icon="mdi-account"
                                                         :rules="[rules.required, rules.minUsername, userError]"
                                                         clearable
                                                         v-model="user.username"
                                                         :error-messages="error.username"
                                                         @keydown="error.username = ''"
                                                 ></v-text-field>
                                             </v-col>
                                             <v-col cols="12">
                                                 <v-text-field
                                                         label="Email"
                                                         prepend-inner-icon="mdi-email"
                                                         :rules="[rules.required,rules.email]"
                                                         clearable
                                                         v-model="user.email"
                                                         :error-messages="error.email"
                                                         @keydown="error.email = ''"
                                                 ></v-text-field>
                                             </v-col>
                                             <v-col
                                                     cols="12"
                                             >
                                                 <v-text-field
                                                         :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                                                         :rules="[rules.required, rules.minPass]"
                                                         :type="showpass ? 'text' : 'password'"
                                                         name="pass"
                                                         label="Password"
                                                         class="input-group--focused"
                                                         @click:append="showpass = !showpass"
                                                         clearable
                                                         prepend-inner-icon="mdi-lock"
                                                         v-model="user.pass"
                                                         :error-messages="error.pass"
                                                         @keydown="error.pass = ''"
                                                 ></v-text-field>
                                             </v-col>
                                             <v-col
                                                     cols="12"
                                             >
                                                 <v-text-field
                                                         :append-icon="showconfpass ? 'mdi-eye' : 'mdi-eye-off'"
                                                         :rules="[rules.required, passMatch]"
                                                         :type="showconfpass ? 'text' : 'password'"
                                                         name="pass"
                                                         label="Confirm Password"
                                                         class="input-group--focused"
                                                         @click:append="showconfpass = !showconfpass"
                                                         clearable
                                                         prepend-inner-icon="mdi-lock"
                                                         v-model="user.confpass"
                                                         :error-messages="error.confpass"
                                                         @keydown="error.confpass = ''"
                                                 ></v-text-field>
                                             </v-col>
                                             <v-col
                                                     class="text-right"
                                                     cols="12">
                                                 <v-btn
                                                         class=""
                                                         outlined
                                                         plain
                                                         :disabled="!valid"
                                                         @click="toStep2"
                                                 >
                                                     <span class="mr-2">Sign Up</span>
                                                 </v-btn>
                                             </v-col>
                                             <v-col cols="12"
                                                    class="text-center">
                                                 <v-btn
                                                         color="grey"
                                                         plain
                                                         small
                                                         block
                                                         to="/signin"
                                                 >
                                                     Already Have an account?
                                                 </v-btn>
                                             </v-col>
                                     </v-row>
                                    </v-form>
                                        <v-row v-if="step == 2"
                                               key="confirm"
                                             class="py-5">
                                         <v-col cols="12"
                                         >
                                             <h1 class="display-5 font-weight-bold mt-3"
                                                 :class="$vuetify.theme.dark?'text--white':'text--black'">
                                                 Confirm Account
                                             </h1>
                                             <p class="subheading font-weight-regular"
                                                :style="{color:$vuetify.theme.dark?'white':'black'}">
                                                 A confirmation code has been sent to your email
                                             </p>
                                         </v-col>
                                         <v-col
                                                 class="text-center"
                                                 cols="12">
                                             <VueOTPField
                                                        :onFill="onFillPin"/>
                                         </v-col>

                                         <v-col
                                                 class="text-center text-lg-left text-md-left"
                                                 cols="12"
                                                 md="6"
                                                 lg="6">
                                             <v-btn
                                                     class="mr-3"
                                                     outlined
                                                     plain
                                                     @click="step = 1"
                                             >
                                                 <span class="mr-2">Back</span>
                                             </v-btn>
                                             <v-btn
                                                     class="ml-3"
                                                     outlined
                                                     plain
                                                     :disabled="!signUpButton"
                                                     @click="signUp"
                                             >
                                                 <span class="mr-2">Confirm</span>
                                             </v-btn>
                                         </v-col>
                                         <v-col class="text-center text-lg-right text-md-right"
                                                cols="12"
                                                md="6"
                                                lg="6">
                                             <v-btn
                                                     color="grey"
                                                     plain
                                                     small
                                                     block
                                             >
                                                 Resend Mail?
                                             </v-btn>
                                         </v-col>
                                     </v-row>
                                 </slide-x-left-transition>
                             </v-col>
                </v-row>
        </v-card>
    </v-container>
</template>

<script>
    import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
    import { SlideYUpTransition,SlideYDownTransition,SlideXLeftTransition } from 'vue2-transitions'
    import { VueTypedJs } from 'vue-typed-js'
    import BgAnimate from  '@/components/Home/BgAnimate.vue'
    import VueOTPField from '@/components/Utils/vue-otp-input.vue'
    export default {
        name: 'SignUp',

        data: () => ({
            showpass: false,
            step:   1,
            valid: false,
            userToken: '',
            showconfpass: false,
            loading:  false,
            signUpButton: false,
            user:   {
                username:   '',
                email:  '',
                pass:   '',
                confpass:   ''
            },
            error:  {
                username:   '',
                email:  '',
                pass:   '',
                confpass:   ''
            },
            rules: {
                required: value => {
                   return !!value || 'Required.'
                },
                minUsername: v => {
                    return !!v && v.length >= 4 || 'Username too short, Min 4 characters'
                },
                counter: value => value.length <= 20 || 'Max 20 characters',
                minPass: v => v.length >= 6 || 'Password too short, Min 6 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            },
        }),
        watch:  {

        },
        methods:    {
            signUp(){
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                }, 1000)
            },
            validate(){
                if(!this.$refs.form.validate()){
                    return false;
                }
                if(this.error.username != ''){
                    return false;
                }
                if(this.error.email != ''){
                    return false;
                }
                if(this.error.pass != ''){
                    return false;
                }
                if(this.error.confpass != ''){
                    return false;
                }
                return true;
            },
            toStep2(){
                if(this.validate()) {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.step = 2;
                    }, 1000)
                }
            },
            onFillPin (val) {
                if(val.isFieldsComplete){
                    this.userToken = val.values;
                    this.signUpButton = true;
                }else{
                    this.userToken = '';
                    this.signUpButton = false;
                }
            },
            userError(){
                return this.error.username == '' || this.error.username
            }
        },
        computed:{
            passMatch(){
                return (this.user.pass == this.user.confpass) || 'Passwords do not match'
            }
        },
        components: {
            LottieAnimation,
            SlideYUpTransition,
            SlideYDownTransition,
            SlideXLeftTransition,
            VueTypedJs,
            BgAnimate,
            VueOTPField
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
    .vue-otp-2 {
        display: flex;
        justify-content: space-between;

        div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            input {
                max-width: 30px;
                padding: 10px 10px;
                font-size: 20px;
                border-radius: 3px;
                border: 1px solid #cecece;
                text-align: center;
                margin-right: -20px;
            }

            span {
                display: block;
                flex: 1;
                text-align: center;
            }
        }
    }
</style>

