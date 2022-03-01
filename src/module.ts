import { fileURLToPath } from 'url'
import { defineNuxtModule, isNuxt2, isNuxt3, getNuxtVersion, addPlugin, addTemplate } from '@nuxt/kit'
import { dirname, resolve } from 'pathe'
import { generateConfigContents } from './gen'
import { formatLogMessage } from './utils'
import { validateModuleOptions } from './validators'

export interface ModuleOptions {
  locales: string[];
  defaultLocale: string | null;
  plugins: string[];
  defaultTimeZone: string | null;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'dayjs-module',
    configKey: 'dayjs'
  },
  defaults: {
    locales: [],
    defaultLocale: null,
    plugins: [],
    defaultTimeZone: null
  },
  setup (options, nuxt) {
    if (!isNuxt2() && !isNuxt3()) {
      throw new Error(formatLogMessage(`Day.js module doesn't support Nuxt v${getNuxtVersion(nuxt)}`))
    }

    const isValid = validateModuleOptions(options)

    if (!isValid) {
      throw new Error(formatLogMessage('You must set valid module options'))
    }

    nuxt.options.build.transpile.push('@nuxtjs/dayjs')

    const srcDir = dirname(fileURLToPath(new URL(import.meta.url)))
    const pluginFilename = isNuxt2() ? 'plugin.bridge' : 'plugin.nuxt3'

    addPlugin({
      src: resolve(srcDir, `runtime/${pluginFilename}`)
    })

    addTemplate({
      filename: 'dayjs.config.mjs',
      getContents: () => generateConfigContents(options)
    })

    if (isNuxt2()) {
      const { dst: declarationFilePath } = addTemplate({
        filename: 'dayjs.plugin.d.ts',
        src: resolve(srcDir, 'types.bridge.d.ts')
      })

      nuxt.hook('prepare:types', ({ references }) => {
        references.push({ path: declarationFilePath })
      })
    }
  }
})
