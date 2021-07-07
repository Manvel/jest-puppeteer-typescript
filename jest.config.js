module.exports = {
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*test.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_environment.js',
}
