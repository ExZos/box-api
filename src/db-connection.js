const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:<password>@cluster0.xmfb7.mongodb.net/<collection>?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dbConnection = mongoose.connection;

module.exports = dbConnection;
