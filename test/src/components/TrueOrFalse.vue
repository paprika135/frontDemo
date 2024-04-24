<template>
    <div>
        <fieldset @click="clickevent">
        <legend class="questionTitle"><span v-if="isNecessay">*</span>{{ props.question?.questionStem }}</legend>
        <div class="questionBody">
            <options v-for="(o, i) of sortedOptions" :key="i" :isTrueOrFalse="isTrueOrFalse" :opt="o" :uuId="String(singalchoiceComponentId)"></options>
        </div>
    </fieldset>
    </div>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, type PropType } from 'vue';
import Options from './SingalChoice/Options.vue';

const props = defineProps({
    question:{
        type:Object as PropType<QuestionType>,
        require:true,
    },
    questionSort:{
        type:Number
    }
})

const isNecessay = computed(()=>{
    return props.question?.isNecessary  == 1 ? true : false;
})


const sortedOptions = computed(()=>{
    const arr:QuestionOptions[] = props.question?.questionOptions.sort((a,b)=>{
        return a.optionSort - b.optionSort;
    }) as QuestionOptions[];
    return arr;
})

const isTrueOrFalse = computed(()=>{
    return props.question?.questionType == '1004' ? true : false;
})

const instance = getCurrentInstance();
const singalchoiceComponentId = instance?.uid as number;

const clickevent = (event:MouseEvent | any)=>{
    if(event.target.checked  == true){
        console.log(event.target.value);
    }
}

</script>

<style scoped></style>