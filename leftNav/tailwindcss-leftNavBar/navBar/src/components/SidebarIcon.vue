<template>
    <div class="sidebar-icon group"> 
        <svg class="fill-green-500 w-8 h-8 group-hover:fill-white transition-all duration-300 ease-linear">
            <use :href="'#icon-' + `${props.name}`"></use>
        </svg>
        <span class="sidebar-tooltip group-hover:scale-100">測試信息</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name:{
        type:String,
        required:true
    }
})
</script>

<style scoped></style>