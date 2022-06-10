const mongoose = require('mongoose');

const uri = 'mongodb+srv://<username>:<password>@cluster0.xmfb7.mongodb.net/<database>?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dbConnection = mongoose.connection;

module.exports = dbConnection;
