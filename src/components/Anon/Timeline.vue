<template>
    <v-container>
        <v-row
                class="px-5 px-lg-0 px-md-0">
            <v-col
                    cols="12"
                    class="hidden-md-and-up">
                <h2 class="font-weight-bold pb-4">
                    Meet new people
                </h2>
                <flicking
                        :options="{
                                gap: 10,
                                bound: true,
                                moveType: 'freeScroll',
                                collectStatistics: false,
                                zIndex: 1,
                                autoResize: true
                            }"
                        :tag="'div'"
                        :viewportTag="'div'"
                        :cameraTag="'div'"
                        class="px-0 py-0 mx-0 my-0"
                        style="cursor: grabbing;"
                >
                    <div
                            v-for="n in 5"
                            :key="n">
                        <slide-y-down-transition
                                appear
                                :delay="400 + (n * 100)">
                            <v-card
                                    max-width="200"
                                    class="my-2"
                            >
                                <v-list-item class="grow pt-2"
                                             style="cursor: pointer;">
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

                                <v-card-actions class="justify-end">
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
                    </div>
                </flicking>
            </v-col>
            <v-col
                    cols="12"
                    class="pt-0 pb-2">
                <v-card
                        class="mx-auto"
                        max-height="350"
                        ripple
                        to="/d/anon/search"
                >
                    <v-img
                            class="white--text align-end"
                            height="200px"
                            src="/img/bg/bg-11.jpg"
                    >
                        <v-card-title>
                            <h2 class="font-weight-bold">
                                What's trending?
                            </h2>
                        </v-card-title>
                        <v-card-text>
                            <div>Check out latest discussions, confessions and polls here</div>
                        </v-card-text>
                    </v-img>
                </v-card>
            </v-col>
            <v-col
                    cols="12">
                <h2 class="font-weight-bold pb-4">
                    Top posts
                </h2>
                <v-row>
                    <slide-y-down-transition
                            appear
                            :delay="500"
                            group>
                        <v-col
                                cols="12"
                                v-for="(post, i) in posts"
                                :key="post.id"
                                class="py-1">
                            <slide-y-down-transition
                                    appear
                                    :delay="500 + (i * 100)">
                                <v-card
                                        class="mx-auto"
                                        min-height="100"
                                >
                                    <v-card-actions>
                                        <v-list-item class="grow"
                                                     style="cursor: pointer;">
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
                                                    {{ post.user }}
                                                </v-list-item-title>
                                                <v-card-subtitle class="px-0 py-0">
                                                    {{ post.type }}
                                                </v-card-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card-actions>

                                    <v-card-text class="headline font-weight-bold">
                                        {{ post.content }}
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-list-item>
                                            <v-row
                                                    align="center"
                                                    justify="end"
                                            >
                                                <div style="cursor: pointer;"
                                                     @click="updateAnonShowLoginTrue">
                                                    <v-icon class="mr-1">
                                                        mdi-heart
                                                    </v-icon>
                                                    <span class="subheading mr-2">{{ post.likes }}</span>
                                                </div>
                                                <span class="mx-2"></span>
                                                <div
                                                        style="cursor: pointer;"
                                                        @click="$router.push('/d/anon/'+post.id)"
                                                >
                                                    <v-icon class="mr-1">
                                                        mdi-comment-outline
                                                    </v-icon>
                                                    <span class="subheading">{{ post.commentcount }}</span>
                                                </div>
                                                <span class="mx-2"></span>
                                                <div
                                                        style="cursor: pointer;"
                                                        @click="updateAnonShowLoginTrue"
                                                >
                                                    <v-icon class="mr-1">
                                                        mdi-repeat
                                                    </v-icon>
                                                    <span class="subheading mr-2">{{ post.likes }}</span>
                                                </div>
                                            </v-row>
                                        </v-list-item>
                                    </v-card-actions>
                                </v-card>
                            </slide-y-down-transition>
                        </v-col>
                    </slide-y-down-transition>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import { SlideYUpTransition, SlideYDownTransition } from 'vue2-transitions';
    import { mapGetters } from 'vuex'
    export default{
        data:()=>({
            posts:  [
                {id:'1', type:'Discussion', user:'665856585', content:'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.', likes:45, commentcount:65, color:'red', time:'5m'},
                {id:'2', type:'Confession', user:'879557577', content:'The list components ensure that we have consistent spacing and functionality while the slider component allows us to provide a useful interface of selection to the user.', likes:876, commentcount:778, color:'primary', time:'2h'},
                {id:'3', type:'Discussion', user:'259063548', content:'Using the layout system, we can add custom text anywhere within the background.', likes:1068, commentcount:945, color:'', time:'2d'},
                {id:'4', type:'Confession', user:'560126907', content:'Cards are entry points to more detailed information. To keep things concise, ensure to limit the number of actions the user can take.', likes:57, commentcount:96, color:'green', time:'1w'}
            ]

        }),
        computed: {
            ...mapGetters([
                'getAnonShowLogin'
            ])
        },
        components: {
            SlideYUpTransition,
            SlideYDownTransition
        },
        methods:{
            updateAnonShowLoginTrue(){
                this.$store.commit('updateAnonShowLogin',true);
            },
            updateAnonShowLoginFalse(){
                this.$store.commit('updateAnonShowLogin',false);
            }
        },
        mounted(){
            this.$store.commit('updateAnonLoading',false);
        }
    }
</script>