import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'

import TheHome from "./pages/TheHome.vue";
import TheReview from "./pages/TheReview.vue";
import AboutUs from "./pages/AboutUs.vue";
import PersonalProfile from "./pages/PersonalProfile.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: TheHome },
        { path: '/review', component: TheReview },
        { path: '/aboutus', component: AboutUs },
        { path: '/profile', component: PersonalProfile },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

const app = createApp(App);

app.use(router);

app.mount('#app');
