import Overview from "./pages/Overview.vue";
import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";
import Order from "./pages/Order.vue";

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
    {
        path: '/products/edit/:id',
        name: 'edit',
        component: Edit
    },
    {
        path: '/products/order',
        name: 'order',
        component: Order
    },
];