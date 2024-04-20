<template>
    <div>
        <fieldset>
            <legend class="questionTitle"><span>*</span>{{ props.question.questionId }}.{{ props.question.questionTitle
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
const instance = getCurrentInstance()!;
const uuId = instance.uid;

</script>

<style scoped></style>