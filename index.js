/**
 * Created by Boldizsar Tompe on 2/26/2017.
 */

var express = require('express');
var app = express();

app.use(express.static('static'));

var server = app.listen(3000, function () {
    console.log('Server is listening on 3000...');
});
