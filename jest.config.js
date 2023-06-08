module.exports = {
  testMatch: ["<rootDir>/src/**/*.test.(js|jsx|ts|tsx)"],
  preset: "ts-jest",
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  setupFiles: ["./src/setupTests.ts"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(svg)$": "<rootDir>/src/tests/__mocks__/fileMock.ts",
    "\\.(css|less)$": "identity-obj-proxy",
    consts: "<rootDir>/src/consts",
    components: "<rootDir>/src/components",
  },
  moduleFileExtensions: ["js", "ts", "tsx"],
  collectCoverageFrom: ["src/**/*.tsx"],
  coverageReporters: ["lcov", "text"],
};
