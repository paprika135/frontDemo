import { type App } from 'vue';
// @ts-ignore
import { createStore } from 'vuex';


const questions = {
    namespace:true,
    state:{
        question:{
            name:"weizhu"
        }
    },
    mutations:{
        saveQuestion(state:any,questions:any){
            console.log(123);
            Object.assign(state,questions);
            console.log(state);
        }
    },
    strict:false
}

const answer = {
    namespace:true,
    state:{
        answer:'123'
    },
    mutations:{
        addAnswer(state:AnswerType,answer:any){
            console.log(answer);
        }
    },
    strict:false
}

const store = createStore({
    modules:{
        questions,
        answer
    }
})

export default function setupVuex(app:App){
    app.use(store)
}