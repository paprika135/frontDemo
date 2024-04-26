<template>
    <div class="flex justify-between items-center mt-2">
        <div class="flex justify-center items-center"><svg class="w-5 h-5"><use :href="'#icon-'+`${icon}`"></use></svg><span :class="textColor" class="ml-2">{{ isCorrect ? '回答正确' : '回答错误'   }}</span></div>
        <div><span :class="textColor">{{isCorrect ? '+' : '-'}}{{ props.sore }}</span></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    questionResult:{
        type:Number
    },
    sore:{
        type:Number
    }
});

const textColor = computed(()=>{
    return isCorrect.value == true ? 'text-blue-500' : 'text-red-600' 
})

const icon = computed(()=>{
    return isCorrect.value == true ? 'correct' : 'error';
})

const isCorrect = computed(()=>{
    //1为正确
    if(props.questionResult === 1){
        return true
    }
    return false
})

</script>

<style scoped>

</style>