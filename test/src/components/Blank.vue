<template>
    <div>
        <fieldset :disabled="props.isDisable">
            <legend class="questionTitle">{{ props.question.questionStem }}</legend>
            <div :class="{isGray:props.isDisable}" class="questionBody">
                <input-component :selectedAnswer="props.question.selectedAnswer" @blur="changeEvent"></input-component>
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
    },
    isDisable:{
        type:Boolean
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

<style scoped lang="scss">
div.isGray{
    @apply text-gray-500;
}
</style>