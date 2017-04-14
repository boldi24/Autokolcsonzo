var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carrental');

module.exports = mongoose;