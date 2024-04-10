<template>
    <div class="flex">
        <card v-for="(url,index) of urls" :key="index" :address=url></card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from '../../components/Card.vue';
import imgs from '../../utils/img/index'
let urls = ref(imgs());
</script>

<style scoped>

</style>