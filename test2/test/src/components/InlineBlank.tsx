import { type ComputedRef, computed, h, type PropType } from 'vue';
import useAnswersStore from '@/plugins/pinia/answers';



//限制答案数组的长度
function templateAnswer(answerArr: string[], maxLength: number) {
    return answerArr.slice(0, maxLength);
}



const CreateVnode = (props: any, store: any, questionStem: string[], isNecessary: ComputedRef<boolean>) => {

    const anser = {
        questionId: props.question?.questionId as number,
        //@ts-ignore
        questionType: props.question?.questionType,
        questionScore: props.question?.questionScore as number,
        selectedAnswer: [] as string[]
    }
    let children: any[] = [];
    for (let i = 0; i < questionStem.length - 1; i++) {
        children.push(questionStem[i]);
        if (props.isDisable) {
            //处理默认值问题
            const defaultVal = computed(()=>{
                if(!props.question.hasOwnProperty('selectedAnswer')) return '';
                return props.question.selectedAnswer[i]
            })
            children.push(h(<input disabled class="border-2 w-10 focus:outline-none ml-1 rounded-md text-gray-400" type="text" value={defaultVal.value} />))
            continue;
        }
        children.push(h('input', {
            "id": i, 'class': 'border-2 w-10 focus:outline-none ml-1 rounded-md', onBlur: (event: FocusEvent | any) => {
                if (anser.selectedAnswer.length >= questionStem.length - 1) {
                    anser.selectedAnswer = templateAnswer(anser.selectedAnswer, questionStem.length - 1);
                    anser.selectedAnswer[event.target.id] = event.target.value;
                } else {
                    anser.selectedAnswer.push(event.target.value);
                }
                store.setAnswer(anser);
                store.addAnswer();
            }, onInput: (event: InputEvent | any) => {
                if (Number(window.getComputedStyle(event.target).getPropertyValue("width").split('p')[0]) < 150) {
                    event.target.style.width = (32 + (event.target.value.length + 1) * 8) + 'px';
                }
            }
        }))
    }
    return (isNecessary.value ? h('div', { "id": props.question.questionId }, h('fieldset', h('legend', { class: 'questionTitle align-middle' }, [[h('span', '*'), ...children, questionStem[questionStem.length - 1]]]))) : h('div', { "id": props.question.questionId }, h('fieldset', h('legend', { class: 'questionTitle align-middle' }, [[...children, questionStem[questionStem.length - 1]]]))))
}



export default {
    props: {
        question: {
            type: Object as PropType<QuestionType>
        },
        questionSort: {
            type: Number
        },
        isDisable: {
            type: Boolean
        }
    },
    setup(props: any) {
        const answerStore = useAnswersStore();
        const lodash = /_+/g;
        const questionStem = props.question.questionStem.replace(lodash, '_').split('_');
        //是否为必选题
        const isNecessay = computed(() => {
            return props.question?.isNecessary == 1 ? true : false;
        });

        return () => CreateVnode(props, answerStore, questionStem as unknown as string[], isNecessay);
    }
}