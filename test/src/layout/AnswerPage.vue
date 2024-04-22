<template>
    <section class="header">
        <div class="h-56 border-1 grid-rows-2 divide-y-1">
            <div class="h-1/4 px-3">
                <h1 class="text-lg text-gray-900">李俊奇</h1>
                <span class="text-xs text-gray-400">答题人</span>
            </div>
            <div class="h-3/4 flex divide-x-1">
                <div class="w-1/2 h-full">
                    <div class="h-full flex justify-center items-center text-center relative">
                        <div>
                            <h1 class="text-orange-500 text-4xl">22.5</h1>
                            <i class="inline-block w-12 h-4 bg-contain"
                                style="background-image: url('./src/assets/images/soreBottom.png');"></i>
                            <div class="text-center text-xs text-gray-400 absolute bottom-0 top right-1/2 translate-x-1/2 -translate-y-full">
                                <span>总分100分</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 h-full flex justify-center items-center text-center relative">
                    <div>
                        <h1 class="mt-3 text-xl">5</h1>
                        <div class="w-12 h-4 text-xs text-gray-400">答对</div>
                        <div class="text-center text-xs text-gray-400 absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-full">
                            <span>共120题</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="body">
        <div class="px-3">
            <div v-if="collapseSwitch" class="flex justify-center items-center py-2">
                <div @click="clickevent"
                    class="flex justify-between p-2 w-36 rounded-s-sm border text-sm text-gray-700 border-gray-300">
                    查看答题解析<i class="iconfont icon-double-arrow"></i></div>
            </div>
            <answer-body v-if="!collapseSwitch" @click="clickevent"></answer-body>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AnswerBody from './AnswerPage/AnswerBody.vue';

const collapseSwitch = ref<boolean>(true)

const clickevent = () => {
    console.log(123);
    
    collapseSwitch.value = collapseSwitch.value == true ? false : true;
}

</script>

<style scoped lang="scss"></style>