import Overview from "./pages/Overview.vue";
import Create from "./pages/Create.vue";

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
    {
        path: '/products/create',
        name: 'create',
        component: Create
    },
];