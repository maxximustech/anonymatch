<template>
    <v-footer padless
              >
        <v-row
                no-gutters
                class="py-2"
        >
            <v-col
                cols="12"
                lg="6"
                md="6"
                class="text-center text-lg-left text-md-left">
                    <v-btn
                            v-for="link in links"
                            :key="link.name"
                            :color="$vuetify.theme.dark?'white':'dark'"
                            active-class="blue--text"
                            text
                            plain
                            :to="link.link"
                            small
                    >
                        {{ link.name }}
                    </v-btn>
            </v-col>
            <v-col
                    class="text-right px-3 hidden-sm-and-down"
                    :class="$vuetify.theme.dark?'white--text':'text--black'"
                    cols="6"
            >
                <small>&copy; {{ new Date().getFullYear() }} <strong>Anonymatch</strong></small>
            </v-col>
        </v-row>
    </v-footer>
</template>
<script>
    export default {
        data: () => ({
            links: [
                {name:'Sign In',link:'/signin'},
                {name:'Sign Up',link:'/signup'},
                {name:'Anon',link:'/d/anon'},
            ],
        }),
    }
</script>
<style scoped>
    .active-link{
        color: royalblue;
    }
</style>