import { defineNuxtPlugin } from '#app'
import dayjs from 'dayjs'
// @ts-ignore
import '#build/dayjs.config.mjs'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs
    }
  }
})
