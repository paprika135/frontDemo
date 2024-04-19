<template>
  <div class="bg-blue-200">
    <section class="bg-gray-200 mx-auto w-2/3">
      <!-- <question-page></question-page> -->
    </section>
    <Test questionContent="在证券市场上，投资者可以通过购买证券来分享企业的经济利益。"></Test>
  </div>
</template>

<script setup lang="ts">
import QuestionPage from './layout/QuestionPage.vue';
import Test from './components/Test.ts'
import { ref } from 'vue';
interface InputVal {
  inputId:string
  value:any
}

const data = ref<InputVal[]>()
const getInputValue = (val:InputVal)=>{
  console.log(val);
}
</script>

<style scoped></style>