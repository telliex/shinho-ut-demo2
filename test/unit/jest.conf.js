const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testURL: 'http://localhost/', // 避免 SecurityError: localStorage is not available for opaque origins 错误
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/test/e2e'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  // mapCoverage: true, // 移除,不再支援
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/main.js', '!src/router/index.js', '!**/node_modules/**', '!**/node_modules/**'],
  coverageReporters: [
    'lcov', // 会生成lcov测试结果以及HTML格式的漂亮的测试覆盖率报告
    'text' // 会在命令行界面输出简单的测试报告
  ]
}
