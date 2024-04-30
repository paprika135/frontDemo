import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { type App } from 'vue';


const routes:RouteRecordRaw[] = [{
    path:'/',
    name:'home',
    // @ts-ignore
    component:()=>import('@/App.vue'),
    children:[{
        path:'test',
        name:'test',
        // @ts-ignore
        component:()=>import('@/layouts/TestPage.vue')
    },{
        path:'answer',
        name:'answer',
        // @ts-ignore
        component:()=>import('@/layouts/AnswerPage.vue')
    }]
}];



const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to,from)=>{
    return undefined;
})

export default function setupVueRouter(app:App){
    app.use(router)
}

