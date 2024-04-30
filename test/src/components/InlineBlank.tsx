import { h, type PropType } from 'vue';
import useAnswersStore from '@/plugins/pinia/answers';



//限制答案数组的长度
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
        if(props.isDisable){
            children.push(h(<input disabled class="border-2 w-10 focus:outline-none ml-1 rounded-md text-gray-400" type="text" value={props.question.selectedAnswer[i]}  />))
            continue;
        }
        children.push(h('input',{"id":i,'class':'border-2 focus:outline-none ml-1 w-10 rounded-md text-start',onBlur:(event:FocusEvent | any)=>{
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
            if(Number(window.getComputedStyle(event.target).getPropertyValue("width").split('p')[0]) < 500){
                event.target.style.width = (32 + (event.target.value.length + 1)*16) + 'px';
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
        },
        isDisable:{
            type:Boolean
        },
        info:{
            type:Object as PropType<any>
        }
    },
    setup(props:any) {
        const answerStore = useAnswersStore();
        const lodash = /_+/g;
        const questionStem = props.question.questionStem.replace(lodash,'_').split('_');
        return ()=>CreateVnode(props,answerStore,questionStem as unknown as string[]);
    }
}