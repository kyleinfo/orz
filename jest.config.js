module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    'ts-jest': {
      tsConfig: {
        target: 'esnext',
        removeComments: false,
        moduleResolution: 'node',
        experimentalDecorators: true,
        allowSyntheticDefaultImports: true,
        strictNullChecks: true,
        noImplicitThis: true,
        esModuleInterop: true,
        sourceMap: true,
      },
      diagnostics: false,
    },
  },
  rootDir: __dirname,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    // '^.+\\.tsx?$': 'ts-jest',
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
