<template>
    <div>
        <div class="flex justify-between">
            <div class="rotate">答案解析<i class="iconfont icon-double-arrow text-gray-500 ml-2"></i></div>
            <div><label><input type="checkbox" class="mr-2">仅看错题</label></div>
        </div>
        <question-body></question-body>
        <judgement></judgement>
        <resolve></resolve>
    </div>
</template>

<script setup lang="ts">
import QuestionBody from '../QuestionPage/QuestionBody.vue';
import Judgement from './Judgement.vue';
import Resolve from './Resolve.vue';
</script>

<style scoped lang="scss">
div.rotate i:before{
    @apply inline-block rotate-180;
}
</style>