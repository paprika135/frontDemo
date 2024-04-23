<template>
  <div class="body">
    <section class="min-h-screen bg-gray-50 mx-auto w-2/3">
      <section class="header">
        <div class="header h-[80px] bg-cover"></div>
      </section>
      <section class="questionbody">
        <question-page></question-page>
        <!-- <answer-page></answer-page> -->
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import QuestionPage from './layout/QuestionPage.vue';
import AnswerPage from './layout/AnswerPage.vue';


</script>

<style scoped lang="scss">
div.header {
  background-image: url('./assets//images/header.png');
}

div.body {
  background-image: url('./assets//images/background.jpg');
}
</style>