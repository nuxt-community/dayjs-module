import path from 'path'
import puppeteer from 'puppeteer'
const { setup, loadConfig } = require('@nuxtjs/module-test-utils')

const url = (path: string) => `http://localhost:3000${path}`

jest.setTimeout(10000)

describe('basic', () => {
  let nuxt: any
  let page: puppeteer.Page
  let browser: puppeteer.Browser

  beforeAll(async () => {
    const createBrowser = async () => {
      browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        headless: process.env.NODE_ENV !== 'development',
        timeout: 0,
      })
      page = await browser.newPage()
    }
    ;[{ nuxt }] = await Promise.all([
      setup(loadConfig(path.resolve(__dirname, '../')), {
        port: 3000,
      }),
      createBrowser(),
    ])
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
    await browser.close()
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

  test('support locale', async () => {
    expect.assertions(2)
    await page.goto(url('/locale'))
    const el = await page.$('[data-test-id="birthday"]')
    const textContent = await el!.getProperty('textContent')
    const value = await textContent.jsonValue()
    expect(value).toBe('1998/04/13(月曜日)')

    const button = await page.$('button')
    await button!.click()
    const newTextContent = await el!.getProperty('textContent')
    const newValue = await newTextContent.jsonValue()
    return expect(newValue).toBe('1995/12/18(月曜日)')
  })

  test('support plugins', async () => {
    expect.assertions(2)
    await page.goto(url('/plugin'))
    const el = await page.$('[data-test-id="advancedFormat"]')
    const textContent = await el!.getProperty('textContent')
    const value = await textContent.jsonValue()
    expect(value).toBe('16th')

    const el1 = await page.$('[data-test-id="localized"]')
    const textContent1 = await el1!.getProperty('textContent')
    const value1 = await textContent1.jsonValue()
    return expect(value1).toBe('Aug 16, 2018')
  })
})
