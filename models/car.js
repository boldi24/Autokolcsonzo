var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Car = db.model('Car', {
    plate: String,
    name: String,
    state: String,
    chassisnum: String,
    type: String,
    doors: Number,
    _currClient: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    start: Date,
    end: Date
});

module.exports = Car;