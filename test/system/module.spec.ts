import config from '../fixture/nuxt.config'

const puppeteer = require('puppeteer')
const request = require('request-promise-native')
const { Nuxt, Builder } = require('nuxt')

const url = (path: string) => `http://localhost:3000${path}`
const get = (path: string) => request(url(path))

jest.setTimeout(10000)

describe('module E2E test', () => {
  let nuxt: any
  let page
  let browser: any

  beforeAll(async () => {
    nuxt = new Nuxt(config)

    const createNuxt = async () => {
      await new Builder(nuxt).build()
      await nuxt.listen(3000)
    }
    const createBrowser = async () => {
      browser = await puppeteer.launch({
        headless: process.env.NODE_ENV !== 'development',
        timeout: 0
      })
      page = await browser.newPage()
    }
    await Promise.all([createNuxt(), createBrowser()])
  }, 300000)

  afterAll(async () => {
    await browser.close()
    await nuxt.close()
  })

  test('WIP', () => {
    // TODO: write test
    expect(true).toBe(true)
  })
})
