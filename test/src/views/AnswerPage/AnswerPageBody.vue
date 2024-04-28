<template>
    <div class="px-3">
        <div class="flex justify-between mb-3 border-b-2">
            <!-- @vue-ignore -->
            <div @click="clickevent" class="rotate">答案解析<i class="iconfont icon-double-arrow text-gray-500 ml-2"></i>
            </div>
            <div @change="onlyError"><label><input type="checkbox" class="mr-2">仅看错题</label></div>
        </div>
        <!-- 答案与解析 -->
        <div v-if="!onlyErrorSwitch" class="mb-3" v-for="(question, index) of renderData" :index="index">
            <component :is="QuestionTypeConfirm(question.questionType)" :question="question" :isDisable="true">
            </component>
            <Judgement v-if="showOrhidden(question.questionResult as number)" :is="`Judgement`"
                :questionResult="question.questionResult" :sore="question.questionScore"></Judgement>
            <ManualJudgement v-else></ManualJudgement>
            <!-- <judgement v-if="showOrhidden(question.questionResult as number)" :questionResult="question.questionResult" :sore="question.questionScore"></judgement> -->
            <resolve v-if="showOrhidden(question.questionResult as number)" :questionAnalysis="question.answerAnalysis">
            </resolve>
        </div>
        <!-- 错题模块 -->
        <div v-else class="mb-3" v-for="(question, index) of errorQuestions()" :index="index">
            <component :is="QuestionTypeConfirm(question.questionType)" :question="question" :isDisable="true">
            </component>
            <Judgement v-if="showOrhidden(question.questionResult as number)" :is="`Judgement`"
                :questionResult="question.questionResult" :sore="question.questionScore"></Judgement>
            <ManualJudgement v-else></ManualJudgement>
            <!-- <judgement v-if="showOrhidden(question.questionResult as number)" :questionResult="question.questionResult" :sore="question.questionScore"></judgement> -->
            <resolve v-if="showOrhidden(question.questionResult as number)" :questionAnalysis="question.answerAnalysis">
            </resolve>
        </div>
        <div class="w-full h-2 border-b-2"></div>
        <div class="flex justify-center items-center mt-5">
            <!-- @vue-ignore -->
            <div @click="clickevent">收起答题解析<i class="iconfont icon-double-arrow text-gray-500 ml-2 before:inline-block before:rotate-180"></i></div>
        </div>
        <div class="w-full h-5"></div>
    </div>
</template>

<script setup lang="ts">
import useQuestionsStore from '@/plugins/pinia/question';
import { PropType, computed, ref } from 'vue';
import QuestionTypeConfirm from '@/service/questionTypeConfirm'
import Resolve from './Resolve.vue';
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
        //把我们自己保存的数据，与服务器相应回来的数据合并，得到渲染数据。
        return Object.assign(item, questionsStore.questionsStore[index]);
    }) as QuestionType[]
})

//控制是解析模块是展示"解析"还是"人工判卷"
const showOrhidden = (res: number) => {
    if (res == 2) {
        return false;
    }
    return true
}


//仅看错题模块
function errorQuestions(){
    return props.examQuestions.filter(item=>item.questionResult == 0);
}

const onlyErrorSwitch = ref<boolean>(false);

const onlyError = ()=>{
    return onlyErrorSwitch.value ? onlyErrorSwitch.value = false : onlyErrorSwitch.value = true;
}


</script>

<style scoped lang="scss">
div.rotate i:before {
    @apply inline-block rotate-180;
}
</style>