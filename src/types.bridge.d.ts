import dayjs from 'dayjs'

// @ts-ignore
declare module 'vue/types/vue' {
  interface Vue {
    $dayjs: typeof dayjs
  }
}

// @ts-ignore
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $dayjs: typeof dayjs
  }

  interface Context {
    $dayjs: typeof dayjs
  }
}

// @ts-ignore
declare module 'vuex/types/index' {
  interface Store<S> {
    $dayjs: typeof dayjs
  }
}
