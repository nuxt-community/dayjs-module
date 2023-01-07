import { ModuleOptions } from './module'
import { logger } from './utils'

type ValidatorFunc = (moduleOptions: ModuleOptions) => boolean

export const validateModuleOptions: ValidatorFunc = (options) => {
  return [
    validateLocales(options),
    validateTimeZone(options)
  ].every(Boolean)
}

export const validateLocales: ValidatorFunc = ({ defaultLocale, locales }) => {
  // By default, Day.js comes with English locale only (i.e. `"en"`)
  // Ref: https://day.js.org/docs/en/i18n/changing-locale
  if (defaultLocale && defaultLocale !== 'en' && !locales.includes(defaultLocale)) {
    logger.error('`defaultLocale` must be either `"en"` or one defined in `locales` option')
    return false
  }

  return true
}

export const validateTimeZone: ValidatorFunc = ({ defaultTimeZone, plugins }) => {
  if (defaultTimeZone && !!plugins.length) {
    const timeZonePluginIndex = plugins.findIndex(p => p === 'timezone' || p === 'timezone.js')

    if (timeZonePluginIndex === -1) {
      logger.error('Timezone plugin must be set in `plugins` option when `defaultTimeZone` option is set')
      return false
    }

    // Timezone Plugin depends on UTC Plugin
    // Ref: https://day.js.org/docs/en/plugin/timezone
    const utcPluginIndex = plugins.findIndex(p => p === 'utc' || p === 'utc.js')

    if (utcPluginIndex === -1 || utcPluginIndex > timeZonePluginIndex) {
      logger.error('UTC plugin must be set before Timezone plugin in `plugins` option')
      return false
    }
  }

  return true
}
