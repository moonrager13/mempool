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


export default config;// Mock logger module globally for all tests
jest.mock('./src/logger.ts', () => {
  return {
    emerg: jest.fn(),
    alert: jest.fn(),
    crit: jest.fn(),
    err: jest.fn(),
    warn: jest.fn(),
    notice: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
    updateNetwork: jest.fn(),
    tags: {
      mining: 'mining',
      ln: 'ln',
      goggles: 'goggles',
    },
  };
});

