<!--
 * @Author: dushuai
 * @Date: 2023-12-01 14:29:58
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-09 19:09:27
 * @description: appvue
-->
<script setup lang="ts">
import { setTheme } from '~/utils/theme'
console.log('sss')
setTheme()
</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
