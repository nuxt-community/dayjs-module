import { defineNuxtConfig } from 'nuxt'
import dayjsModule from '..'

export default defineNuxtConfig({
  modules: [
    dayjsModule
  ],
  dayjs: {
    plugins: [
      'duration',
      'relativeTime',
      'advancedFormat',
      'weekday'
    ]
  }
})
