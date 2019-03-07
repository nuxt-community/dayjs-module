const config = require('../fixture/nuxt.config.js')
import puppeteer from 'puppeteer'

const request = require('request-promise-native')
const { Nuxt, Builder } = require('nuxt')

const url = (path: string) => `http://localhost:3000${path}`
const get = (path: string) => request(url(path))

jest.setTimeout(10000)

describe('module E2E test', () => {
  let nuxt: any
  let page: puppeteer.Page
  let browser: puppeteer.Browser

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

  test('can use Day.js', async () => {
    expect.assertions(2)
    await page.goto(url('/'))
    const el = await page.$('[data-test-id="birthday"]')
    const textContent = await el!.getProperty('textContent')
    const value = await textContent.jsonValue()
    expect(value).toBe('1998/04/13')

    const button = await page.$('button')
    await button!.click()
    const newTextContent = await el!.getProperty('textContent')
    const newValue = await newTextContent.jsonValue()
    return expect(newValue).toBe('1995/12/18')
  })
})
