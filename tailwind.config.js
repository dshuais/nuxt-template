/*
 * @Author: dushuai
 * @Date: 2023-12-04 17:55:41
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-08 18:30:34
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
      // fontFamily: {
      //   sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      // },
      textColor: {
        primary: '#1D2129',
        regular: '#4E5969',
        secondary: 'red',
        disabled: '#C9CDD4',
      },
      backgroundColor: {
        primary: 'red',
        secondary: '#EBEDF0',
      }
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
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

