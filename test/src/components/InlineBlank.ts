import { h, type PropType } from 'vue';
import useAnswersStore from '@/plugins/pinia/answers';



// type CreateTuple<T extends any[]> = T extends infer P ? P : never;

// function createTuple<T extends any[]>(arr:[...T]):[...T]{
//     return [...arr];
// }

function templateAnswer(answerArr:string[],maxLength:number){
    return answerArr.slice(0,maxLength);
}

const CreateVnode = (props:any,store:any,questionStem:string[])=>{
    
    const anser = {
        questionId: props.question?.questionId as number,
        //@ts-ignore
        questionType: props.question?.questionType,
        questionScore: props.question?.questionScore as number,
        selectedAnswer:[] as string[]
    }
    let children:any[] = [];
    for(let i = 0;i < questionStem.length - 1;i++){
        children.push(questionStem[i]);
        children.push(h('input',{"id":i,'class':'border-2 w-10 focus:outline-none ml-1 rounded-md',onBlur:(event:FocusEvent | any)=>{
            if(anser.selectedAnswer.length >= questionStem.length -1){
                anser.selectedAnswer = templateAnswer(anser.selectedAnswer,questionStem.length -1);
                anser.selectedAnswer[event.target.id] = event.target.value;
            }else{
                anser.selectedAnswer.push(event.target.value)
            }
            store.setAnswer(anser);
            store.addAnswer();
        },onInput:(event:InputEvent | any)=>{
            // console.log(typeof window.getComputedStyle(event.target).getPropertyValue("width"));
            // console.log(window.getComputedStyle(event.target).getPropertyValue("width").split('p'));
            if(Number(window.getComputedStyle(event.target).getPropertyValue("width").split('p')[0]) < 150){
                event.target.style.width = (32 + (event.target.value.length + 1)*8) + 'px';
            }
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
        const answerStore = useAnswersStore();
        const lodash = /_+/g;
        const questionStem = props.question.questionStem.replace(lodash,'_').split('_');
        return ()=>CreateVnode(props,answerStore,questionStem as unknown as string[])
    }
}