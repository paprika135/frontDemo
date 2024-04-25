<template>
    <div>
        <fieldset>
            <legend class="questionTitle">{{ props.question.questionStem }}</legend>
            <div class="questionBody">
                <input-component @blur="changeEvent"></input-component>
            </div>
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import InputComponent from './Blank/InputComponent.vue';
import useAnswersStore from '@/plugins/pinia/answers';
const answerStore = useAnswersStore();
const props = defineProps({
    question: {
        type: Object as PropType<QuestionType>,
        required: true
    },
    questionSort:{
        type:Number
    }
})


const anser = {
    questionId: props.question?.questionId as number,
    //@ts-ignore
    questionType: props.question?.questionType,
    questionScore: props.question?.questionScore as number,
    selectedAnswer: ''
}

function changeEvent(event:FocusEvent){
    anser.selectedAnswer = event.target?.value
    answerStore.setAnswer(anser);
    answerStore.addAnswer();
    // console.log(answerStore.answers.questions);
}

</script>

<style scoped></style>