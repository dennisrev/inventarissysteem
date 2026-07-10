import Overview from "./pages/Overview.vue";

export const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/products',
        name: 'overview',
        component: Overview
    },
];