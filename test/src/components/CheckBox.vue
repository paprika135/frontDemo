<template>
    <div>
        <fieldset @click="clickevent">
            <legend class="questionTitle"><span v-if="props.question.isNecessay">*</span>{{ props.question.questionId }}.{{ props.question.questionTitle
                }}</legend>
            <div class="questionBody">
                <check-box-option v-for="(item, index) of props.question.questionOptions" :uuId="uuId" :key="index"
                    :option="item"></check-box-option>
            </div>
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import {
    PropType,
    getCurrentInstance
} from 'vue';
import CheckBoxOption from './CheckBox/CheckBoxOption.vue';

const props = defineProps({
    question: {
        type: Object as PropType<QuestionType>,
        required: true
    }
})

const clickevent = (event:MouseEvent | any)=>{
    if(event.target.checked == true){
        console.log(event.target.value);
        
    }
}

const instance = getCurrentInstance()!;
const uuId = instance.uid;

</script>

<style scoped></style>