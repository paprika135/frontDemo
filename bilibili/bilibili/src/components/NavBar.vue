<template>
    <div>
        <div class="flex justify-between items-center h-20"><img class="w-16 h-8" src="@/assets/images/logo.webp"
                alt="">
            <div class="flex justify-between items-center w-44">
                <svg class="fill-gray-400 w-6 h-6">
                    <use href="#icon-magnifier"></use>
                </svg>
                <div class="w-8 h-8 text-center rounded-full bg-gray-200 text-pink-600">
                    <span class="leading-8 text-xs">登录</span>
                </div>
                <div class="text-xs text-slate-50 bg-pink-600 w-20 h-6 text-center rounded-md">
                    <span class="leading-6 mr-1">下载</span><span class="leading-6">App</span>
                </div>
            </div>
        </div>
        <div class="h-10 flex relative">
            <div class="slide leading-10 flex-initial">
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
                <a class="w-16 mx-3" href="#"><span>首页</span></a>
            </div>
            <div class="my-auto w-5">
                <svg class="w-5 h-5 fill-gray-400">
                    <use href="#icon-downarrow"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script> 

<style scoped lang="scss">
div.slide{
    overflow: auto;
    white-space: nowrap;
    &::-webkit-scrollbar{
        display: none;
    }
}
</style>