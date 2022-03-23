<template>
    <v-container class="px-5 px-lg-10 px-md-10">
        <v-card
                class="mx-auto mb-5"
                min-height="100"
        >
            <v-list-item class="grow">
                <v-btn
                        icon
                        @click="goBack"
                >
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-menu
                        offset-y
                        bottom
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on"
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            <v-list-item-title>Follow</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>View Profile</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Report</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-list-item>
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
                            54364754746
                        </v-list-item-title>
                        <v-card-subtitle class="px-0 py-0">
                            Discussion
                        </v-card-subtitle>
                    </v-list-item-content>

                </v-list-item>

            </v-card-actions>

            <v-card-text class="headline font-weight-bold">
                Nothing is impossible, even the word itself says I'm possible.
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
                            <span class="subheading mr-2">543</span>
                        </div>
                        <span class="mx-2"></span>
                        <div
                                style="cursor: pointer;"
                                @click=""
                        >
                            <v-icon class="mr-1">
                                mdi-comment-outline
                            </v-icon>
                            <span class="subheading">645</span>
                        </div>
                        <span class="mx-2"></span>
                        <div style="cursor: pointer;"
                             @click="updateAnonShowLoginTrue">
                            <v-icon class="mr-1">
                                mdi-repeat
                            </v-icon>
                            <span class="subheading mr-2">754</span>
                        </div>
                    </v-row>
                </v-list-item>
            </v-card-actions>
        </v-card>
        <v-row class="pl-5 pl-lg-10 pl-md-10">
            <v-col
                    cols="12"
                    v-for="(post, i) in posts"
                    :key="post.id"
                    class="py-1">
                <slide-y-down-transition>
                    <v-card
                            class="mx-auto"
                            min-height="100"
                    >
                        <v-card-actions>
                            <v-list-item class="grow">
                                <v-list-item-avatar color="grey darken-3"
                                                    style="cursor: pointer;">
                                    <v-img
                                            class="elevation-6"
                                            alt=""
                                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                    ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content
                                        style="cursor: pointer;">
                                    <v-list-item-title
                                            class="font-weight-bold">
                                        {{ post.user }}
                                    </v-list-item-title>
                                    <v-card-subtitle class="px-0 py-0">
                                        {{ post.type }}
                                    </v-card-subtitle>
                                </v-list-item-content>
                                <v-spacer></v-spacer>
                                <v-menu
                                        offset-y
                                        bottom
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                                icon
                                                v-bind="attrs"
                                                v-on="on"
                                        >
                                            <v-icon>mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-list>
                                        <v-list-item>
                                            <v-list-item-title>Follow</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-title>View Profile</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-title>Report</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
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
                                    <div style="cursor: pointer;"
                                         @click="updateAnonShowLoginTrue">
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
        </v-row>
        <v-card
                class="mt-5"
                width="100%"
                v-sticky
                sticky-side="bottom"
                sticky-z-index="7"
        >
            <v-row class="py-5">
                <v-col cols="12" lg="6" md="6" class="text-left py-0">
                    <v-card-text class="font-weight-bold py-0">
                        Need to drop a comment?
                    </v-card-text>
                </v-col>
                <v-col cols="12" lg="6" md="6" class="text-right py-0">
                    <v-card-actions class="justify-end py-0">
                        <v-btn
                                text
                                color="primary accent-4"
                                to="/signin"
                        >
                            Sign In
                        </v-btn>
                        <v-btn
                                text
                                color="primary accent-4"
                                to="/signup"
                        >
                            Sign Up
                        </v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
        <v-row
                class="pt-10 pb-5 d-none"
                v-sticky
                sticky-side="bottom"
                sticky-z-index="7"
        >
            <v-col cols="10"
                   lg="11"
                   md="11"
                   class="text-center py-0"
            >
                <v-textarea
                        label="Reply"
                        filled
                        single-line
                        rounded
                        auto-grow
                        outlined
                        hide-details
                        rows="1"
                        row-height="15"
                        style="border-radius: 20px; max-height: 500px; overflow-y: auto;"
                        :background-color="$vuetify.theme.dark?'black':'white'"
                        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
            </v-col>
            <v-col
                    cols="1"
                    class="text-left px-0 mx-0 py-0 pr-3"
            >
                <v-btn
                        elevation="4"
                        fab
                        medium
                        color="primary"
                >
                    <v-icon>mdi-send</v-icon>
                    </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import { SlideYUpTransition, SlideYDownTransition } from 'vue2-transitions';
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                notifications: false,
                sound: true,
                widgets: false,
                posts:  [
                    {id:'1', type:'Discussion', user:'665856585', content:'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.', likes:45, commentcount:65, color:'red', time:'5m'},
                    {id:'2', type:'Confession', user:'879557577', content:'The list components ensure that we have consistent spacing and functionality while the slider component allows us to provide a useful interface of selection to the user.', likes:876, commentcount:778, color:'primary', time:'2h'},
                    {id:'3', type:'Discussion', user:'259063548', content:'Using the layout system, we can add custom text anywhere within the background.', likes:1068, commentcount:945, color:'', time:'2d'},
                    {id:'4', type:'Confession', user:'560126907', content:'Cards are entry points to more detailed information. To keep things concise, ensure to limit the number of actions the user can take.', likes:57, commentcount:96, color:'green', time:'1w'}
                ]
            }
        },
        computed: {
            ...mapGetters([
                'getAnonShowLogin'
            ])
        },
        methods:{
            goBack(){
                window.history.back()
            },
            updateAnonShowLoginTrue(){
                this.$store.commit('updateAnonShowLogin',true);
            },
            updateAnonShowLoginFalse(){
                this.$store.commit('updateAnonShowLogin',false);
            }
        },
        components: {
            SlideYUpTransition,
            SlideYDownTransition
        },
        mounted(){
            this.$store.commit('updateAnonLoading',false);
        }
    }
</script>