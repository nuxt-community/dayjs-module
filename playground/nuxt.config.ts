import { defineNuxtConfig } from 'nuxt3'
import dayjsModule from '..'

export default defineNuxtConfig({
  modules: [
    dayjsModule
  ],
  dayjs: {
    locales: ['ja'],
    // defaultLocale: 'de',
    // plugins: ['timezone.js'],
    // plugins: ['timezone.js', 'utc'],
    plugins: ['utc', 'timezone.js'],
    defaultTimeZone: 'Asia/Tokyo'
  }
})
