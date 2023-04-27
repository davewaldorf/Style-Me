module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017',
  MONGODB_NAME: process.env.MONGODB_NAME || 'styleme',
  JWT_SECRET: 'secret',
};