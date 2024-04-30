<template>
    <div>
        <input :checked="props.ischecked" ref="singalV" class="align-middle" type="radio" :id="`${props.uuId}`+option" :name="`${props.uuId}`" :value="props.opt?.optionId"/>
        <label class="ml-1 align-middle" :for="`${props.uuId}`+option"><span v-show="!props.isTrueOrFalse">{{option}}:</span>{{props.opt?.optionContent }}</label>
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
    },
    isTrueOrFalse:{
        type:Boolean
    },
    ischecked:{
        type:Boolean
    }
})

// console.log(props.ischecked);


const option = computed<string>(()=>{
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".at((props.opt?.optionSort as number -1)) as string;
})



</script>

<style scoped></style>