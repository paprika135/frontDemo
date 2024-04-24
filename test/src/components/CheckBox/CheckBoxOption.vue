<template>
    <div>
        <input class="mr-2 align-middle" type="checkbox" :name="`${props.uuId}`" :id="`${props.uuId}` + `${option}`" :value="props.option.optionId">
        <label class="align-middle" :for="`${props.uuId}` + `${option}`"><span>{{ option }}:</span>{{ props.option.optionContent }}</label>
    </div>
</template>

<script setup lang="ts">
import { type PropType,computed } from 'vue';
const props = defineProps({
    uuId:{
        type:Number,
        required:true
    },
    option:{
        type:Object as PropType<QuestionOptions>,
        required:true
    }
});

const option = computed<string>(()=>{
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".at((props.option?.optionSort as number -1)) as string;
})



</script>

<style scoped>

</style>