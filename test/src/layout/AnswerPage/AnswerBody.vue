<template>
    <div>
        <div class="text-sm h-14 border-b-1 flex justify-between items-center">
            <div @click="$attrs.onClick">答案解析<i class="iconfont icon-double-arrow text-gray-400"></i></div>
            <div><input class="align-middle mr-2" type="checkbox" name="onlyError" :id="uuId"><label for="uuId"
                    class="text-gray-900">仅看错题</label></div>
        </div>
        <div class="mt-4">
            <section class="questionbody">
                <single-choice :question="question"></single-choice>
            </section>
            <section class="judgement">
                <judgement></judgement>
            </section>
            <section class="resolve">
                <resolve></resolve>
            </section>
        </div>
        <div class="mt-4">
            <section class="questionbody">
                <single-choice :question="question"></single-choice>
            </section>
            <section class="judgement">
                <judgement></judgement>
            </section>
            <section class="resolve">
                <resolve></resolve>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue';
import SingleChoice from '@/components/SingleChoice.vue';
import Judgement from './Judgement.vue';
import Resolve from './Resolve.vue';
import mockjs from 'mockjs';

const question = ref<QuestionType>({
    questionId: 1,
    questionTitle: mockjs.Random.cword(20),
    questionType: 'SingleChoice',
    isNecessay: mockjs.Random.boolean(),
    questionOptions: [
        {
            optionsId: 0,
            optionContent: mockjs.Random.cword(12)
        },
        {
            optionsId: 1,
            optionContent: mockjs.Random.cword(12)
        },
        {
            optionsId: 2,
            optionContent: mockjs.Random.cword(12)
        },
        {
            optionsId: 3,
            optionContent: mockjs.Random.cword(12)
        }
    ]
})





defineOptions({
    inheritAttrs: false
});

const instance = getCurrentInstance()!;
const uuId = ref<string>(String(instance.uid));



</script>

<style scoped lang="scss">
i.iconfont::before {
    @apply inline-block scale-50 rotate-180;
}
</style>