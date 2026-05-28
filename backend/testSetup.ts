// Mock logger module globally for all tests
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
