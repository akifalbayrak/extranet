import { createRouter, createWebHistory } from "vue-router";
import Auth from "../components/Auth.vue";

const routes = [
    {
        path: "/login",
        name: "auth",
        component: Auth,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
