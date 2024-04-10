<template>
    <div class="relative group w-max h-max overflow-hidden m-3">
        <div>
            <img class="w-[300px] h-[212px]" :src=props.address alt="">
            <div class="text-white text-xs font-bold absolute left-[15px] bottom-[20px] z-20 w-[260px] mb-[-38px] group-hover:translate-y-[-40px] transition-all duration-300"><h4 class="mb-2">产品</h4>
            <h5 class="mb-2">OceeanStorPacific 海量存储斩获2021 Interop金奖</h5>
            <a href="#">
                <svg class="fill-red-500 inline-block w-3 h-3 mr-1">
                    <use href="#icon-rightarrow"></use>
                </svg><span>了解更多</span>
            </a>
        </div>
        </div>
        <div class="opacity-0 group-hover:opacity-70 w-[300px] h-[212px] bg-gradient-to-b from-transparent to-slate-700 absolute top-0 left-0 transition-all duration-500">
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    address:{
        type:String,
    }
})


</script>

<style scoped></style>