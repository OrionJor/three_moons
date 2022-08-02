module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    './vscode/',
    './husky/'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],

  moduleNameMapper: {
    '^style-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
