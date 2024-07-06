import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/home'  // 默认重定向到 /home
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../pages/demo/first.vue'),
    },
    {
        path: '/on',
        name: 'on',
        component: () => import('../pages/demo/on.vue'),
    },
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
