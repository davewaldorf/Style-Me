const mongoose = require('mongoose');
const { MONGODB_URI, MONGODB_NAME } = require('../config');

mongoose.connect(`${MONGODB_URI}/${MONGODB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose; 