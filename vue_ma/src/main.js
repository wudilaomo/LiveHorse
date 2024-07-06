import { createApp } from 'vue';

import router from './router';

// Vuesax
import Vuesax from 'vuesax-alpha';
import 'vuesax-alpha/theme-chalk/index.css';
import 'vuesax-alpha/theme-chalk/dark/css-vars.css';

// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// Global CSS
import './style.css';

// App
import App from './App.vue';

const app = createApp(App)
    .use(router)
    .use(ElementPlus, {
        size: 'small',
        zIndex: 3000
    })
    .use(Vuesax, {
        colors: {
            primary: 'rgb(36, 159, 253)',
            success: 'rgb(23, 201, 100)',
            danger: 'rgb(242, 19, 93)',
            warning: 'rgb(255, 130, 0)',
            dark: 'rgb(36, 33, 69)'
        }
    })
    .mount('#app');
