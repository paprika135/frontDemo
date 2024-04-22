<template>
    <div>
        <input  ref="singalV" class="align-middle" type="radio" :id="`${props.uuId}`+option" :name="`${props.uuId}`" :value="option" :checked="props.opt?.optionsId == props.checkedOption"/>
        <label class="ml-1 align-middle" :for="`${props.uuId}`+option">{{option}}:{{props.opt?.optionContent }}</label>
    </div>
</template>

<script setup lang="ts">
import { computed, type PropType, } from 'vue';

const props = defineProps({
    opt:{
        type:Object as PropType<QuestionOptions>,
        require:true
    },
    uuId:{
        type:String
    },
    checkedOption:{
        type:Number
    }
})

const option = computed<string>(()=>{
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".at(props.opt?.optionsId as number) as string;
})



</script>

<style scoped></style>