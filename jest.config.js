module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*',
    '!**/node_modules/**',
    '!<rootDir>/src/**/*app.js',
    '!<rootDir>/src/**/*metaData.js',
    '!<rootDir>/src/**/*swagger.json',
    '!<rootDir>/src/**/*middlewares.js',
    "!<rootDir>/src/modules/**/*{Controller,Business,Service,Repository}.js"
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
    'coverage',
    'node_modules',
    'index.js',
    'routes.js',
  ],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },

  moduleDirectories: ['node_modules'],
  roots: ['<rootDir>/src/'],
};
