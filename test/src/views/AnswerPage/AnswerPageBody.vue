<template>
    <div class="px-3">
        <div class="flex justify-between mb-3 border-b-2">
            <!-- @vue-ignore -->
            <div @click="clickevent" class="rotate">答案解析<i class="iconfont icon-double-arrow text-gray-500 ml-2"></i>
            </div>
            <div><label><input type="checkbox" class="mr-2">仅看错题</label></div>
        </div>
        <div class="mb-3" v-for="(question,index) of renderData" :index="index">
            <!-- 渲染题目 -->
            <component :is="QuestionTypeConfirm(question.questionType)" :question="question" :isDisable="true">
            </component>
            <!-- 渲染是否正确及解析 -->
            <!-- @vue-ignore -->
            <answer-and-resolve :answerAnalysis="question.answerAnalysis" :info="question.info" :questionType="QuestionTypeConfirm(question.questionType)"></answer-and-resolve>
        </div>
        <div class="w-full h-2 border-b-2"></div>
        <div class="flex justify-center items-center mt-5">
            <!-- @vue-ignore -->
            <div @click="clickevent">收起答题解析<i
                    class="iconfont icon-double-arrow text-gray-500 ml-2 before:inline-block before:rotate-180"></i>
            </div>
        </div>
        <div class="w-full h-5"></div>
    </div>
</template>

<script setup lang="ts">
import useQuestionsStore from '@/plugins/pinia/question';
import { PropType, computed } from 'vue';
import QuestionTypeConfirm from '@/service/questionTypeConfirm';
import AnswerAndResolve from './AnswerAndResolve.vue';
const questionsStore = useQuestionsStore();
const props = defineProps({
    examQuestions: {
        type: Object as PropType<ResInfo[]>,
        required: true
    },
    clickevent: {
        type: Function
    }
})





const renderData = computed<QuestionType[]>(() => {
    return props.examQuestions.map(item => {
        const index = questionsStore.questionsStore.findIndex(ques => ques.questionId == item.questionId);
        return Object.assign(item, questionsStore.questionsStore[index]);
    }) as QuestionType[]
})









</script>

<style scoped lang="scss">
div.rotate i:before {
    @apply inline-block rotate-180;
}
</style>