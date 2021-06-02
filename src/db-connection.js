const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:HOtbadyi8PSQFX65@cluster0.xmfb7.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dbConnection = mongoose.connection;

module.exports = dbConnection;
