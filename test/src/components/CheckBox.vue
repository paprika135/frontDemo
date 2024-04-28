<template>
    <div :id="String(props.question?.questionId)">
        <fieldset :disabled="props.isDisable" @change="clickevent">
            <legend class="questionTitle"><span v-if="isNecessay">*</span>{{ props.question.questionStem
                }}</legend>
            <div class="questionBody">
                <check-box-option :ischecked="isOptionChecked(item.optionId)" v-for="(item, index) of sortedOptions" :uuId="uuId" :key="index"
                    :option="item"></check-box-option>
            </div>
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import {
    PropType,
    computed,
    getCurrentInstance
} from 'vue';
import CheckBoxOption from './CheckBox/CheckBoxOption.vue';
import useAnswersStore from '@/plugins/pinia/answers';
const answerStore = useAnswersStore();

const props = defineProps({
    question: {
        type: Object as PropType<QuestionType>,
        required: true
    },
    questionSort: {
        type: Number
    },
    isDisable:{
        type:Boolean
    }
})

const isNecessay = computed(() => {
    return props.question.isNecessary == 1 ? true : false;
})

const anser = {
    questionId: props.question?.questionId as number,
    //@ts-ignore
    questionType: props.question?.questionType,
    questionScore: props.question?.questionScore as number,
    selectedAnswer: [] as string[]
}


const clickevent = (event: MouseEvent | any) => {
    if (event.target.checked == true) {
        if(anser.selectedAnswer.includes(event.target.value)) return;
        anser.selectedAnswer.push(event.target.value);
        answerStore.setAnswer(anser);
    }else{
        const result = anser.selectedAnswer.filter(item=>item !== event.target.value);
        anser.selectedAnswer = result;
        answerStore.setAnswer(anser);
    }
    answerStore.addAnswer();
    // console.log(answerStore.answers.questions);
}

const instance = getCurrentInstance()!;
const uuId = instance.uid;

const sortedOptions = computed(() => {
    return props.question.questionOptions.sort((a, b) => {
        return a.optionSort - b.optionSort;
    })
})

const isOptionChecked = (id:number)=>{
    // console.log(props.question.selectedAnswer);
    if(props.question.selectedAnswer){
        if(props.question.selectedAnswer.includes(String(id))) return true;
        return false;
    }
}


</script>

<style scoped></style>