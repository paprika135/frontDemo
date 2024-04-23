<template>
    <div>
        <SingleChoice :questionSort="1" :question="question"></SingleChoice>
    </div>
</template>

<script setup lang="ts">
import TestData from "@/mock/index"
import { ref } from "vue";

const question = ref(TestData.questionList[1])


</script>

<style scoped>

</style>