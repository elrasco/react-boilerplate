module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./src/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
