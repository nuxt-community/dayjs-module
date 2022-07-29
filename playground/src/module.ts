import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addTemplate } from '@nuxt/kit'
import { generateConfigContents } from './gen'

export interface ModuleOptions {
  locales: string[];
  defaultLocale: string | null;
  plugins: string[];
  defaultTimeZone: string | null;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nathanchase/nuxt-dayjs-module',
    configKey: 'dayjs',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },

  defaults: {
    locales: [],
    defaultLocale: null,
    plugins: [],
    defaultTimeZone: null
  },

  async setup (options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    await nuxt.options.build.transpile.push(runtimeDir)
    await addPlugin(resolve(runtimeDir, 'plugin'))
    await addTemplate({
      filename: 'dayjs.config.mjs',
      getContents: () => generateConfigContents(options)
    })
  }
})
