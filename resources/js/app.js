require('./bootstrap');
import { createApp } from 'vue';
import App from './view/App.vue'
import router from './router'

createApp(App).use(router).mount('#app');