module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts}',

    // 忽略依赖和打包
    '!**/dist/**',
    '!**/lib/**',
    '!**/build/**',

    // 忽略入口
    '!src/index.ts',
  ],
};
