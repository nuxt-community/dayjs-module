const resolve = require('path').resolve

const optionConfig = {}

export default {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: ['~/../../lib/module'],
  'nuxt-dayjs-module': optionConfig,
  dev: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV === 'production'
}
