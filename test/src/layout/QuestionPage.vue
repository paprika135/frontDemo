<template>
    <div class="px-3">
        <div class="h-15 border-b-2 border-dotted text-center">
            <h1 class="text-cyan-700">xxx试题</h1>
        </div>
        <inline-blank></inline-blank>

        <!-- <section><component v-for="(question,index) of questionLists" :is="question.questionType" :key="index" :question="question"></component></section>  -->
    </div>
</template>

<script setup lang="ts">
import questionList from '../mock/mock';
import { ref } from 'vue';
const questionLists = ref(questionList);

</script>

<style scoped>

</style>