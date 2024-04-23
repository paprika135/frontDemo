<template>
    <div class="px-3">
        <div class="h-28 border-b-2 border-dotted flex justify-center items-center">
            <h1 class="text-cyan-700 leading-28">{{ questions.title }}</h1>
        </div>
        <section class="questionBody mt-2">
            <question-body></question-body>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QuestionBody from '@/layout/QuestionPage/QuestionBody.vue';
import testData from '@/mock/index'
const questions = ref<TestData>(testData);

// const decidedQuestionType = (questionType: string) => {
//     switch (questionType) {
//         case '1002':
//             return 'SingleChoice';
//         case '1003':
//             return 'CheckBox';
//         case '1007':
//             return 'CheckBox';
//         default:
//             break;
//     }
// }

// const addComponentName = (arr: any[]) => {

//     arr.map(item => {
//         const componentName = 
//             return Object.assign(item, {

//         })
//     })
// }

// addComponentName(questions.value.questionList)


</script>

<style scoped lang="scss"></style>