<template>
    <div>
        <fieldset :disabled="true" @click="clickevent" :name="String(singalchoiceComponentId)">
            <legend class="questionTitle"><span v-if="props.question?.isNecessay">*</span>{{ props.question?.questionId }}.{{ props.question?.questionTitle }}</legend>
            <div class="questionBody">
                <options v-for="(o,i) of props.question?.questionOptions" :key="i"  :opt="o" :uuId="String(singalchoiceComponentId)" :checkedOption="2"></options>
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

const clickevent = (event:MouseEvent | any)=>{
    if(event.target.checked  == true){
        console.log(event.target.value);
    }
}

const instance = getCurrentInstance();
const singalchoiceComponentId = instance?.uid as number;
</script>

<style scoped>

</style>