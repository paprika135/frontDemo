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
//获取试卷信息
//@ts-ignore
import testData from '@/mock/index';
import Footers from '@/views/QuestionPage/Footers.vue';
import { provide, ref } from 'vue';
import { useRouter } from 'vue-router';
import useQuestionsStore from '@/plugins/pinia/question';
import useAnswersStore from '@/plugins/pinia/answers';
import UncheckedIndex from '@/service/canSubmit';
const router = useRouter();
//试卷信息
const questions = ref<TestData>(testData);
const answerStore = useAnswersStore();
provide('questions',questions);
answerStore.setterTestPaperId(questions.value.testPaperId);


const skipTo = ()=>{
    //保存题目数据
    const questionStore = useQuestionsStore();
    questionStore.saveQuestion(questions.value.questionList);
    questionStore.interAnswer(answerStore.answers.questions);
    
    // console.log(questionStore.questionsStore);
    
    //收集用户未答的必答题
    const unCheckList = UncheckedIndex(questionStore.questionsStore,questionStore.necessaryQuestions);
    if(unCheckList.length == 0){
        router.push({name:'answer'});
    }else{
        questionStore.questionsStore.forEach(item=>{
            const target = document.getElementById(String(item.questionId));
            target?.classList.remove("errorQuestion")
        })
        unCheckList.forEach(item=>{
            const target = document.getElementById(item?.questionId);
            target?.classList.toggle('errorQuestion',true);
        })
    }

    const firstUncheckedQuestion = document.getElementById(unCheckList[0]?.questionId)
    firstUncheckedQuestion?.scrollIntoView({ behavior: "smooth"})
}
</script>

<style scoped>

</style>