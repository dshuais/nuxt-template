import { loadEnv } from "vite";

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
  vite: {
    // envDir: "~/src/env",
  },
  runtimeConfig: {
    public: {
      ...envData,
    },
  },
});
