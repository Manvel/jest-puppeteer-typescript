const puppeteer = require("puppeteer");

beforeAll(async() => {
  global.BROWSER = await puppeteer.launch({headless: false});
});

afterAll(async () => {
  await global.BROWSER.close();
});
