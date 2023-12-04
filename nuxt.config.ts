/*
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-04 17:03:28
 * @description: nuxt.config
 */
import { loadEnv } from "vite";

/**
 * 环境变量引入nuxt客户端的方案 通过 useRuntimeConfig().public使用
 */
/**
 * 环境变量接口
 */
interface VITE_ENV_CONFIG {
  VITE_NODE_ENV: string;
  VITE_APP_ENV: string;
}
const envScript = (process.env as any).npm_lifecycle_script.split(" "); // 启动命令字符串
const envName = envScript[envScript.length - 1]; // 当前运行环境 对应文件名
const envData = loadEnv(envName, "env") as unknown as VITE_ENV_CONFIG;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },

  // 环境变量 public可在客户端useRuntimeConfig().public访问
  runtimeConfig: {
    public: {
      ...envData,
    },
  },

  // 配置modules会自动加载
  modules: [
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // '@nuxtjs/tailwindcss'
  ],

  // 配置pinia持久化 存储在session内，在store/*ts内设置无效
  piniaPersistedstate: {
    storage: 'sessionStorage'
  },

  vite: {
    // envDir: "~/src/env",
  },

});
