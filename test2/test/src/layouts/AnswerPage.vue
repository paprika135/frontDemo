<template>
    <div class="w-2/3 mx-auto bg-slate-100 shadow-lg">
        <test-title :title="'高考数学'"></test-title>
        <AnserPageHeader :res="res"></AnserPageHeader>
        <section class="body">
            <div class="px-3">
                <div v-if="collapseSwitch" class="flex justify-center items-center py-2">
                    <div @click="clickevent"
                        class="flex justify-between p-2 w-36 rounded-s-sm border text-sm text-gray-700 border-gray-300">
                        查看答题解析<i class="iconfont icon-double-arrow"></i></div>
                </div>
                <AnswerPageBody :examQuestions="res.data.examResultInfo" v-if="!collapseSwitch"
                    :clickevent="clickevent"></AnswerPageBody>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import response from '@/mock/response';
import AnswerPageBody from '@/views/AnswerPage/AnswerPageBody.vue';
import AnserPageHeader from '@/views/AnswerPage/AnswerPageHeader.vue';
import TestTitle from '@/views/TestTitle.vue';
import { ref } from 'vue';

//获取判卷结果
const res = ref<TestRes>(response)

const collapseSwitch = ref<boolean>(true)

const clickevent = () => {
    collapseSwitch.value = collapseSwitch.value == true ? false : true;
}

</script>

<style scoped lang="scss"></style>