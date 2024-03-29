module.exports = {
  transform: { '^.+\\.tsx?$': '<rootDir>/jest-preprocess.ts' },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file_mock.ts'
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: { __PATH_PREFIX__: '' },
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/loadershim.ts']
}
