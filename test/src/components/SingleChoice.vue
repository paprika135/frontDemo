<template>
    <div>
        <fieldset :name="String(singalchoiceComponentId)">
            <legend class="questionTitle"><span>*</span>{{ props.question?.questionId }}.{{ props.question?.questionTitle }}</legend>
            <div class="questionBody">
                <options v-for="(o,i) of props.question?.questionOptions" :key="i"  :opt="o" :uuId="String(singalchoiceComponentId)"></options>
            </div>
        </fieldset>
    </div>
</template>
<script setup lang="ts">
import { getCurrentInstance, type PropType } from 'vue';
import Options from './SingalChoice/Options.vue';
const props = defineProps({
    question:{
        type:Object as PropType<QuestionType>,
        require:true,
    }
});

const instance = getCurrentInstance();
const singalchoiceComponentId = instance?.uid as number;
</script>

<style scoped>

</style>