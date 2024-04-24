<template>
    <div>
        <fieldset @click="clickevent">
            <legend class="questionTitle"><span v-if="isNecessay">*</span>{{ props.question.questionStem
                }}</legend>
            <div class="questionBody">
                <check-box-option v-for="(item, index) of sortedOptions" :uuId="uuId" :key="index"
                    :option="item"></check-box-option>
            </div>
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import {
    PropType,
    computed,
    getCurrentInstance
} from 'vue';
import CheckBoxOption from './CheckBox/CheckBoxOption.vue';

const props = defineProps({
    question: {
        type: Object as PropType<QuestionType>,
        required: true
    },
    questionSort:{
        type:Number
    }
})

const isNecessay = computed(()=>{
    return props.question.isNecessary == 1 ? true : false;
})


const clickevent = (event:MouseEvent | any)=>{
    if(event.target.checked == true){
        console.log(event.target.value);
        
    }
}

const instance = getCurrentInstance()!;
const uuId = instance.uid;

const sortedOptions = computed(()=>{
    return props.question.questionOptions.sort((a,b)=>{
        return a.optionSort - b.optionSort;
    })
})

</script>

<style scoped></style>