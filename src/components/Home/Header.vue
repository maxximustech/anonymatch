<template>
    <v-app-bar
            app
            :color="$vuetify.theme.dark?'dark':'white'"
            dark
            style="z-index: 99;"
    >
        <div class="d-flex align-center">
            <router-link to="/">
                <v-img
                        alt="Vuetify Logo"
                        class="mr-2 align-center"
                        contain
                        src="img/logo/anonymatch-with-logo.png"
                        transition="scale-transition"
                        width="150"
                        to="/"
                />
            </router-link>
        </div>
        <v-spacer></v-spacer>
        <v-btn
                fab
                x-small
                @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
            <v-icon>{{ $vuetify.theme.dark?'mdi-white-balance-sunny':'mdi-moon-waning-crescent' }}</v-icon>
        </v-btn>
    </v-app-bar>
</template>