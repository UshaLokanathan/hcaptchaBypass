import * as puppeteer from "puppeteer-extra";
// init method
puppeteer.launch({ headless: true }).then(async browser => {
      const page = await browser.newPage()
      await page.setViewport({ width: 800, height: 600 })
      await page.goto("https://bot.sannysoft.com")
      await page.waitFor(5000)
    });