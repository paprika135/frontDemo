<template>
    <div class="flex justify-between items-center mt-2">
        <div class="flex justify-center items-center"><svg class="w-5 h-5"><use :href="'#icon-'+`${icon}`"></use></svg><span :class="textColor" class="ml-2">回答正确</span></div>
        <div><span :class="textColor">{{isCorrect ? '+' : '-'}}0.5分</span></div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['commitResult','answer','questionType']);

const textColor = computed(()=>{
    return isCorrect.value == true ? 'text-blue-500' : 'text-red-600' 
})

const icon = computed(()=>{
    return isCorrect.value == true ? 'correct' : 'error';
})

const isCorrect = computed(()=>{
    if(props.questionType == 'SingleChoice'){
        return true
    }
    return true
})

</script>

<style scoped>

</style>