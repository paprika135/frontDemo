<template>
  <div class="body">
    <section class="bg-gray-50 mx-auto w-2/3">
      <section>
        <div class="header h-[80px] bg-contain"></div>
      </section>
      <question-page></question-page>
    </section>
  </div>
</template>

<script setup lang="ts">
import QuestionPage from './layout/QuestionPage.vue';


</script>

<style scoped>
div.header {
  background-image: url('./assets//images/header.png');
}

div.body {
  background-image: url('./assets//images/background.jpg');
}
</style>