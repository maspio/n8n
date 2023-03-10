/** @type {import('jest').Config} */
const config = require('../../jest.config');

config.collectCoverage = true;
config.collectCoverageFrom = ['./credentials/**/*.ts', './nodes/**/*.ts', './utils/**/*.ts'];
config.coverageReporters = ['text', 'cobertura'];

module.exports = config;
