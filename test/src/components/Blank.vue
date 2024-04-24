<template>
    <div>
        <fieldset>
            <legend class="questionTitle">{{ props.question.questionStem }}</legend>
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
    },
    questionSort:{
        type:Number
    }
})
</script>

<style scoped></style>