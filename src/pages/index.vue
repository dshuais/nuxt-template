<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-09 15:03:15
 * @description: test
-->
<script setup lang="ts">
const count = ref<number>(0)
</script>

<template>
  <div class="bg-primary dark:bg-violet-200">
    index {{ count }}
    <div class="bg-green-500 mt20">123</div>
    <div class="box">我是apply</div>
    <span class="text-primary bg-[#165DFF]">主色</span>
    <span class="text-regular regular">常规色</span>
    <span class="text-secondary">次要色</span>
    <span class="text-disabled">禁用色</span>
  </div>
</template>
<style scoped>
.box {
  @apply w-80 h-20 md:bg-emerald-400 bg-green-800 text-rose-400 md:text-black dark:text-white;
}

.regular {
  /* background: theme('colors.pink'); */
}
</style>