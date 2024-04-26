<template>
    <div>
        <component class="mb-5" v-for="(qeustion,index) of props.questionList" :questionSort="index" :question="qeustion" :is="QuestionTypeConfirm(qeustion.questionType)"></component>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import QuestionTypeConfirm from '@/service/questionTypeConfirm';
const props = defineProps({
    questionList: {
        type: Object as PropType<QuestionType[]>
    }
})





</script>

<style scoped></style>