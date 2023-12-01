<!--
 * @Author: dushuai
 * @Date: 2023-12-01 14:29:58
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-01 18:41:01
 * @description: appvue
-->
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
function a() {
  console.log(`%c
    ________             
      / ____/ /_  ___  ____ 
     / /   / __ \\/ _ \\/ __ \\
    / /___/ / / /  __/ / / /
    \\____/_/ /_/\\___/_/ /_/ 

    shuai
         ________                   ___________________
          / ____ / /               ● / ____
         / /    / /_        ____  __/ /
        / /__  / __ \\/ / / / _  \\/ / /__
        \\ __  / / / / / / / / / / / \\ __
       ____/ / / / / /_/ / /_/ / /     / /
  __________/_/ /_/______\\_____\\/ 
           
                            
    `, "color:skyblue"),
    console.group("%c[WelCome]", `padding: 4px 6px;
  font-weight: 600;
  border-radius: 4px;
  color:#fff;
  background-color:skyblue;`),
    console.log("这里是打工人小陈的博客"),
    console.log("此博客正在building"),
    console.log("不定时更新"),
    console.log("博主正在大小周坐牢"),
    console.groupEnd(),
    new Date().getDay() === 4 && console.log("疯狂星期四，v我50🐶"),
    console.log("%c Chen %c V0.0.1 ", "padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;", "padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: skyblue; font-weight: bold;")
}
a()
</script>
