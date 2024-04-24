<template>
    <div class="h-28 border-b-2 border-dotted flex justify-center items-center">
        <h1 class="text-cyan-700 text-2xl leading-28">{{ props.title }}</h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title:{
        type:String
    }
})
</script>

<style scoped></style>