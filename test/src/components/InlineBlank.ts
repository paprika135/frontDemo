import { h, type PropType } from 'vue';
// @ts-ignore
import { useStore } from 'vuex';



const CreateVnode = (props:any,store:any,questionStem:string[])=>{
    let children:any[] = [];
    for(let i = 0;i < questionStem.length - 1;i++){
        children.push(questionStem[i]);
        children.push(h('input',{'class':'border-2 w-8 focus:outline-none ml-1 rounded-md',onChange:(event:InputEvent)=>{
            store.commit('addAnswer',event.target?.value)
        }}))
    }
    return h('div',h('fieldset',h('legend',{class:'questionTitle align-middle'},[[,...children,questionStem[questionStem.length -1]]])))
}



export default {
    props:{
        question:{
            type:Object as PropType<QuestionType>
        },
        questionSort:{
            type:Number
        }
    },
    setup(props:any,context:any) {
        const store = useStore();
        const lodash = /_+/g;
        const questionStem = props.question.questionStem.replace(lodash,'_').split('_');
        return ()=>CreateVnode(props,store,questionStem as unknown as string[])
    }
}