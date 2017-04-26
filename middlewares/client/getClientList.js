var requireOption = require('../common').requireOption;

/*
* Get the client list and put the clients on res.tpl.clients
* */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {

        clientModel.find({}, function (err, result) {
            if(err){
                return next(new Error('Error getting clients'));
            }

            res.tpl.clients = result;
            return next();
        });
    };

};