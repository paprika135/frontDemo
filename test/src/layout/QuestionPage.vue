<template>
    <div class="px-3">
        <div class="h-28 border-b-2 border-dotted flex justify-center items-center">
            <h1 class="text-cyan-700 leading-28">202306 海绵基础押题三</h1>
        </div>
        <section class="mt-2">
            <component class="mb-3" v-for="(question, index) of questionLists" :is="question.questionType" :key="index"
                :question="question"></component>
        </section>
    </div>
</template>

<script setup lang="ts">
import questionList from '../mock/mock';
import { ref } from 'vue';
const questionLists = ref(questionList);

</script>

<style scoped lang="scss">

</style>