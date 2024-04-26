import { createApp } from 'vue';
import './assets/css/index.scss';
// @ts-ignore
import App from './App.vue';
import setupPlugin from './utils/ComponentAutoLoad';
import setupVuex from './plugins/vuex';
import '@/assets/iconfont/iconfont.css';
//svg批量处理
import 'virtual:svg-icons-register';
import setupVueRouter from './router/router';
import setupPinia from './plugins/pinia';



const app = createApp(App);
setupPlugin(app);
setupVuex(app);
setupVueRouter(app);
setupPinia(app);
app.mount('#app');
