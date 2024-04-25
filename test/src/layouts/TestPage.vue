<template>
    <div class="w-2/3 mx-auto bg-slate-100 shadow-lg">    
        <Header></Header>
        <Body></Body>
        <Footers @click="skipTo"></Footers>
    </div>
</template>

<script setup lang="ts">
import Body from '@/views/QuestionPage/Body.vue';
import Header from '@/views/QuestionPage/Header.vue';
//@ts-ignore
import testData from '@/mock/index';
import Footers from '@/views/QuestionPage/Footers.vue';
import { provide, ref } from 'vue';
import { useRouter } from 'vue-router';
import useQuestionsStore from '@/plugins/pinia/question';
import useAnswersStore from '@/plugins/pinia/answers';
const router = useRouter();
const questions = ref<TestData>(testData);
const answerStore = useAnswersStore();
provide('questions',questions);
answerStore.setterTestPaperId(questions.value.testPaperId);


const skipTo = (event:MouseEvent)=>{
    //保存题目数据
    const qustionStore = useQuestionsStore();
    qustionStore.saveQuestion(questions.value.questionList);
    console.log();
    //提交答案
    //@ts-ignore
    console.log(qustionStore.questions);
    // console.log(JSON.stringify([answerStore.answers]));
    router.push({name:'answer'});
}
</script>

<style scoped>

</style>