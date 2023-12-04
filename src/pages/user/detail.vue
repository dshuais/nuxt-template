<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-04 16:47:27
 * @description: 心平气和
-->
<script setup lang="ts">
import { useAppStore } from '~/store';

const env = useRuntimeConfig()
const appStore = useAppStore()
const count = ref<App.Count>(0)

function handleLog() {
  console.log('env:>> ', import.meta.env)
  console.log('public:>> ', env.public)

  // appStore.token = '12346'
  appStore.SET_TOKEN('123456789')

  // ThisLog()

}
</script>

<template>
  <div>
    user {{ count }}
    <BaseButton />
    <button @click="handleLog">log</button>
    <button @click="appStore.REMOVE_TOKEN()">remove Token</button>
    <div>{{ appStore.token }}</div>
  </div>
</template>
<style scoped lang="scss"></style>