import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login";
import Home from "@/views/Home";
import Details from "@/views/Details";
import Logout from "@/views/Logout";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component:Home,
    },
    {
        path: "/logout",
        name: "Logout",
        component:Logout,
    },
    {
        path: "/todo/:id",
        name: "Details",
        component: Details,
        props: true
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;