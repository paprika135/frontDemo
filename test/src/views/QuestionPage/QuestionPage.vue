<template>
    <div class="px-3">
        <test-title :title="questions.title"></test-title>
        <section class="questionBody mt-2">
            <question-body :questionList="questions.questionList"></question-body>
        </section>
    </div>
</template>

<script setup lang="ts">
import QuestionBody from '@/views/QuestionPage/QuestionBody.vue';
import TestTitle from '../TestTitle.vue';
import { inject } from 'vue';
const questions:TestData = inject('questions') as unknown as TestData;



</script>

<style scoped lang="scss"></style>