<template>
    <div class="h-56 border-1 grid-rows-2 divide-y-1">
        <div class="h-1/4 px-3">
            <h1 class="text-lg text-gray-900">李俊奇</h1>
            <span class="text-xs text-gray-400">答题人</span>
        </div>
        <div class="h-3/4 flex divide-x-1">
            <div class="w-1/2 h-full">
                <div class="h-full flex justify-center items-center text-center relative">
                    <div>
                        <h1 class="text-orange-500 text-4xl">{{ props.res?.data.score }}</h1>
                        <i class="inline-block w-12 h-4 bg-contain"
                            style="background-image: url('./src/assets/images/soreBottom.png');"></i>
                        <div
                            class="text-center text-xs text-gray-400 absolute bottom-0 top right-1/2 translate-x-1/2 -translate-y-full">
                            <span>总分{{ props.res?.data.totalScore }}分</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/2 h-full flex justify-center items-center text-center relative">
                <div>
                    <h1 class="mt-3 text-xl">{{ props.res?.data.rightQuestion }}</h1>
                    <div class="w-12 h-4 text-xs text-gray-400">答对</div>
                    <div
                        class="text-center text-xs text-gray-400 absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-full">
                        <span>共{{ props.res?.data.totalQuestion }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
    res:{
        type:Object as PropType<TestRes>
    }
})
</script>

<style scoped></style>