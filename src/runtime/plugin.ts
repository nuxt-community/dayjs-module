import { defineNuxtPlugin } from '#app'
import dayjs from 'dayjs'
import '#build/dayjs.config.mjs'

declare module '#app' {
  interface NuxtApp {
    $dayjs: dayjs.Dayjs
 }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs
    }
  }
})
