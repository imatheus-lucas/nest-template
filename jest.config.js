
const {  pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  bail:true,
  clearMocks:true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: [
    '<rootDir>'
  ],
  testMatch: [
    '**/*.spec.ts'
  ],
  collectCoverageFrom: [
    '**/*controller.ts',
    '**/*service.ts',
  ],
  
}

