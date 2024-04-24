<template>
    <div class="px-3">
        <test-title :title="questions.title"></test-title>
        <section class="questionBody mt-2">
            <question-body :questionList="questions.questionList"></question-body>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TestTitle from '../TestTitle.vue';
import QuestionBody from '@/views/QuestionPage/QuestionBody.vue';
import testData from '@/mock/index'
const questions = ref<TestData>(testData);



</script>

<style scoped lang="scss"></style>