<template>
    <div>
        <component class="mb-5" v-for="(qeustion,index) of props.questionList" :questionSort="index" :question="qeustion" :is="decidedQuestionType(qeustion.questionType)"></component>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
    questionList: {
        type: Object as PropType<QuestionType[]>
    }
})

const decidedQuestionType = (questionType: string) => {
    switch (questionType) {
        case '1001':
            return 'Blank';
        case '1002':
            return 'SingleChoice';
        case '1003':
            return 'CheckBox';
        case '1004':
            return 'TrueOrFalse';
        case '1005':
            return 'Blank';
        case '1007':
            return 'InlineBlank';
        default:
            return 'CheckBox';
    }
}


</script>

<style scoped></style>