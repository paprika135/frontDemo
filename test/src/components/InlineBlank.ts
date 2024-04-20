import {h} from 'vue';
// @ts-ignore
import { useStore } from 'vuex';



const CreateVnode = (question:QuestionType,store:any)=>{
    let children:any[] = [];
    for(let i = 0;i < question.questionTitle.length - 1;i++){
        children.push(question.questionTitle[i]);
        children.push(h('input',{'class':'border-2 w-8 focus:outline-none ml-1 rounded-md',onChange:(event:InputEvent)=>{
            store.commit('addAnswer',event.target?.value)
        }}))
    }
    
    return h('div',h('fieldset',h('legend',{class:'text-sm align-middle'},[[question.questionId,'.',...children],'。'])))
}



export default {
    props:['question'],
    setup(props:any,context:any) {
        const store = useStore();
        return ()=>CreateVnode(props.question,store)
    }
}