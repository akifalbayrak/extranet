import { createRouter, createWebHistory } from "vue-router";
import Auth from "../components/Auth.vue";
import ForgotPassword from "../components/ForgotPassword.vue";
import Register from "../components/Register.vue";
import RegisterForm from "../components/RegisterForm.vue";
import MainPage from "../components/MainPage.vue";

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "auth",
        component: Auth,
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: ForgotPassword,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/register-form",
        name: "register-form",
        component: RegisterForm,
    },
    {
        path: "/main-page",
        name: "main-page",
        component: MainPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
