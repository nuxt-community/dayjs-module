const { resolve } = require('path')

function dayjsModule(moduleOptions) {
  moduleOptions = moduleOptions || {}
  this.options.dayjs = this.options.dayjs || {}
  const options = {
    locales: [
      ...(this.options.dayjs.locales || []),
      ...(moduleOptions.locales || []),
    ],
    defaultLocale: (
      moduleOptions.defaultLocale ||
      this.options.dayjs.defaultLocale ||
      null
    ),
    plugins: [
      ...(this.options.dayjs.plugins || []),
      ...(moduleOptions.plugins || []),
    ],
    defaultTimeZone: (
      moduleOptions.defaultTimeZone ||
      this.options.dayjs.defaultTimeZone ||
      null
    )
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'dayjs-plugin.js',
    options
  })
}

module.exports = dayjsModule
module.exports.meta = require('../package.json')
