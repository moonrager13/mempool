import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  automock: false,
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/**.ts'],
  coverageProvider: 'v8',
  setupFiles: [
    './testSetup.ts',
  ],
  testPathIgnorePatterns: [
    '/dist/',
    '/node_modules/',
    '/__integration_tests__/',
    'test-utils\\.ts$',
    'gbt-tests\\.ts$',
  ],
};


export default config;
