<template>
    <v-app-bar
            app
            :color="$vuetify.theme.dark?'dark':'white'"
            style="z-index: 99;"
    >
        <div class="d-flex align-center">
            <router-link to="/">
                <v-img
                        alt="Vuetify Logo"
                        class="mr-2 align-center"
                        contain
                        src="/img/logo/anonymatch-logo.png"
                        transition="scale-transition"
                        width="50"
                        to="/"
                />
            </router-link>
        </div>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
            <v-text-field
                    label="Search Anon"
                    append-icon="mdi-magnify"
                    single-line
                    class="pt-7 mr-5"
                    style="display: none;"
                    @click="$router.push('/d/anon/search')"
            />
        <v-btn
                fab
                x-small
                @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
            <v-icon>{{ $vuetify.theme.dark?'mdi-white-balance-sunny':'mdi-moon-waning-crescent' }}</v-icon>
        </v-btn>
        <v-progress-linear
                :active="getAnonLoading"
                :indeterminate="getAnonLoading"
                absolute
                bottom
        ></v-progress-linear>
    </v-app-bar>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default{
        computed: {
            ...mapGetters([
                'getAnonShowLogin',
                'getAnonLoading'
            ])
        },
    }
</script>