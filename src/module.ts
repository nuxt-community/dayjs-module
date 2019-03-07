import { resolve } from 'path'

type TODO = any

function dayjsModule(this: TODO) {
  const consola = require('consola')
  try {
    this.addPlugin({
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'dayjs-plugin.js'
    })
  } catch (e) {
    consola.error(e)
    return false
  }
  return true
}

module.exports = dayjsModule
module.exports.meta = require('../package.json')
