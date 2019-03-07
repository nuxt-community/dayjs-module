const resolve = require('path').resolve

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: ['~/../../lib/module'],
  dev: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV === 'production'
}
