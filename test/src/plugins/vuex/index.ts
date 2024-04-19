import { type App } from 'vue';
// @ts-ignore
import { createStore } from 'vuex';

interface AnswerType {
    answer:any[]
}

const store = createStore({
    state(){
        return {
            answer:[]
        } as AnswerType
    },
    mutations:{
        increment(state:AnswerType,answer:any){
            console.log(answer);
            state.answer.push(answer);
        }
    }
})

export default function setupVuex(app:App){
    app.use(store)
}