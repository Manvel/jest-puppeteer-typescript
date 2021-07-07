import puppeteer from "puppeteer";

describe(
  '/ (Home Page)',
  () => {
    let page;
    beforeAll(async () => {
      page = await BROWSER.newPage();
      await page.goto('https://google.com');
    });

    it('should load without error', async () => {
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('google');
    });
  }
);
