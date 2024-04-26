<template>
  <div class="body min-h-screen min-w-full">
    <div class="h-5"></div>
    <router-view></router-view>
    <div class="h-5"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
div.body {
  background-image: url('./assets//images/background.jpg');
}
</style>