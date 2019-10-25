const resolve = require('path').resolve

export default {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: ['~/../../lib/module.js'],
  dev: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV === 'production',
  dayjs: {
    locales: ['ja']
  }
}
