<template>
    <div class="flex-row mt-3 px-2">   
        <div class="text-gray-700  font-bold">答案解析:</div>
        <div class="text-gray-400">{{ props.questionAnalysis }}</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['questionAnalysis'])
</script>

<style scoped>

</style>