<template>
    <div :id="String(props.question?.questionId)">
        <fieldset :disabled="props.isDisable" @click="clickevent" :name="String(singalchoiceComponentId)">
            <legend class="questionTitle"><span v-if="isNecessay">*</span>{{ props.question?.questionStem }}</legend>
            <div class="questionBody">
                <options :ischecked="isOptionChecked(o.optionId)" v-for="(o, i) of sortedOptions" :key="i" :opt="o" :uuId="String(singalchoiceComponentId)">
                </options>
            </div>
        </fieldset>
    </div>
</template>
<script setup lang="ts">
import useAnswersStore from '@/plugins/pinia/answers';
import { computed, getCurrentInstance, type PropType } from 'vue';
import Options from './SingalChoice/Options.vue';

const answerStore = useAnswersStore();

const props = defineProps({
    question: {
        type: Object as PropType<QuestionType>,
        require: true,
    },
    questionSort: {
        type: Number
    },
    isDisable:{
        type:Boolean
    }
});

const isOptionChecked = (id:number)=>{
    if(props.question?.selectedAnswer === String(id)){
        return true
    }
    return false;
}


const isNecessay = computed(() => {
    return props.question?.isNecessary == 1 ? true : false;
})

const anser = {
    questionId: props.question?.questionId as number,
    //@ts-ignore
    questionType: props.question?.questionType,
    questionScore: props.question?.questionScore as number,
    selectedAnswer: [] as string[]
}

const clickevent = (event: MouseEvent | any) => {
    if (event.target.checked == true) {
        anser.selectedAnswer = [event.target.value];
        answerStore.setAnswer(anser);
        answerStore.addAnswer();
        // console.log(answerStore.answers.questions);
    }
}



const sortedOptions = computed<QuestionOptions[]>(() => {
    const arr: QuestionOptions[] = props.question?.questionOptions.sort((a, b) => {
        return a.optionSort - b.optionSort;
    }) as QuestionOptions[];
    return arr;
})

const instance = getCurrentInstance();
const singalchoiceComponentId = instance?.uid as number;
</script>

<style scoped></style>