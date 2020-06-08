import Vue from 'vue'
import dayjs from 'dayjs'

declare module '@nuxt/vue-app' {
  interface Context {
    $dayjs: typeof dayjs
  }
  interface NuxtAppOptions {
    $dayjs: typeof dayjs
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $dayjs: typeof dayjs
  }
  interface NuxtAppOptions {
    $dayjs: typeof dayjs
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $dayjs: typeof dayjs
  }
}
