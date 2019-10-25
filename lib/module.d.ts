import Vue from 'vue'
import dayjs from 'dayjs'

declare module 'vue/types/vue' {
  interface Vue {
    $dayjs: typeof dayjs
  }
}
