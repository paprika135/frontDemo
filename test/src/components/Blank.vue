<template>
    <div>
        <fieldset>
            <legend class="questionTitle">{{ props.question.questionId }}.{{ question.questionTitle }}</legend>
            <div class="questionBody">
                <input-component></input-component>
            </div>
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import InputComponent from './Blank/InputComponent.vue';
const props = defineProps({
    question: {
        type: Object as PropType<QuestionType>,
        required: true
    }
})
</script>

<style scoped></style>