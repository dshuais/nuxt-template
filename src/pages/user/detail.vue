<script setup lang="ts">
const count = ref<number>(0)
const env = useRuntimeConfig()

function handleLog() {
  console.log('env:>> ', import.meta.env)
  console.log('public:>> ', env.public)
}
</script>

<template>
  <div>
    user {{ count }}
    <BaseButton />
    <button @click="handleLog">log</button>
  </div>
</template>
<style scoped lang="scss"></style>