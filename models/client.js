var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Client = db.model('Client', {
    nationalId: String,
    name: String,
    address: String,
    phone: String,
    licence: String
});

module.exports = Client;