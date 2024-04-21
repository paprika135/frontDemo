import { createApp } from 'vue';
import './assets/css/index.scss';
// @ts-ignore
import App from './App.vue';
import setupPlugin from './utils/ComponentAutoLoad';
import setupVuex from './plugins/vuex';



const app = createApp(App);
setupPlugin(app);
setupVuex(app);
app.mount('#app');
