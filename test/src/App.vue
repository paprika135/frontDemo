<template>
  <div class="body min-h-screen min-w-full">
    <div class="h-5"></div>
    <!-- <test-page></test-page> -->
    <!-- <answer-page></answer-page> -->
    <router-view></router-view>
    <div class="h-5"></div>
  </div>
</template>

<script setup lang="ts">
// import TestPage from './layouts/TestPage.vue';
// import AnswerPage from './layouts/AnswerPage.vue';
</script>

<style scoped lang="scss">
div.body {
  background-image: url('./assets//images/background.jpg');
}
</style>