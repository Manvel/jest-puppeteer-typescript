module.exports = {
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*test.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/testSetupFile.js'],
}
