
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['dayjs']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['dayjs']?: ModuleOptions }
}


export { ModuleOptions, default } from './module'
