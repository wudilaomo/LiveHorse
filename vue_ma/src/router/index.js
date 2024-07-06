import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/Menu',
        name: 'Menu',
        component: () => import('../pages/demo/menu_dish.vue'),
        meta: {
            demo: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
