module.exports = {
  name: 'store-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/store-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
