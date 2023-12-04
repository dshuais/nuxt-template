/*
 * @Author: dushuai
 * @Date: 2023-12-04 17:55:41
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-04 18:28:35
 * @description: 心平气和
 */
/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './src/components/**/*.{js,jsx,ts,tsx,vue}',
    './src/pages/**/*.{js,jsx,ts,tsx,vue}',
    './layouts/**/*.{js,jsx,ts,tsx,vue}',
    './app.vue',
    './src/assets/**/*.scss',
    './src/assets/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

