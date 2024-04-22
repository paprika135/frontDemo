import { createApp } from 'vue';
import './assets/css/index.scss';
// @ts-ignore
import App from './App.vue';
import setupPlugin from './utils/ComponentAutoLoad';
import setupVuex from './plugins/vuex';
import '@/assets/iconfont/iconfont.css';
import 'virtual:svg-icons-register';



const app = createApp(App);
setupPlugin(app);
setupVuex(app);
app.mount('#app');
