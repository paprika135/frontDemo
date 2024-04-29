<template>
    <component :is="confirmJudgementComponent(props.questionType as string)" :isCorrect="isCorrect" :info="props.info"></component>
    <Resolve v-if="isResolveShow" :questionAnalysis="props.answerAnalysis"></Resolve>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';


const props = defineProps({
    info:{
        type:Object as PropType<any[]>,
        requeired:true
    },
    questionType:{
        type:String
    },
    answerAnalysis:{
        type:String
    }
})



const isCorrect = ref<boolean>();
const isResolveShow = ref<boolean>();


function  confirmQuestionIsCorrent(arr:any[]):boolean{
    return arr.every(item=>item.questionResult == 1) as boolean;
}

function confirmJudgementComponent(questionType:string):string{
    if(questionType == 'InlineBlank'){
        isResolveShow.value = true;
        if (confirmQuestionIsCorrent(props.info as any[])){
            isCorrect.value = true;
            return 'Judgement';
        }else if(props.info?.every(item=>item.questionResult == 0)){
            isCorrect.value = false;
            return 'Judgement';
        }
        return 'PartialCorrect';
    }else if (props.questionType == 'Blank'){
        isResolveShow.value = false;
        return 'ManualJudgement';
    }else{
        isResolveShow.value = true;
        if (confirmQuestionIsCorrent(props.info as any[])){
            isCorrect.value = true;
            return 'Judgement';
        }
        isCorrect.value = false;
        return 'Judgement';
    }
}







</script>

<style scoped>

</style>