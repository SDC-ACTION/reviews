const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', () => console.log('Connection Error'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports.mongoose = mongoose;

module.exports.reviewsTable = require('./methods/reviews.js');
