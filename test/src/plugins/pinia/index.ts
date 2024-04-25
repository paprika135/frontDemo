import { createPinia } from 'pinia';
import { type App } from 'vue';

const pinia = createPinia();


export default function setupPinia(app:App){
    app.use(pinia);
}