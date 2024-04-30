<template>
    <input class="w-2/3 rounded-md border-2 focus:outline-none" type="text" :value="props.selectedAnswer">
</template>

<script setup lang="ts">

const props = defineProps({
    selectedAnswer:{
        type:String
    }
})

</script>

<style scoped>

</style>