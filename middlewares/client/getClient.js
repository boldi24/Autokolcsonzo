var requireOption = require('../common').requireOption;

/**
 * Fetches the client
 * if doesnt exist -> redirect to /clients
 * if does exist -> put on res.tpl.client
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {

        var id = "";
        if(typeof req.body.currClient !== 'undefined'){
            id = req.body.currClient;
        } else if(typeof req.params.id !== 'undefined'){
            id = req.params.id;
        } else{
            return next();
        }

        clientModel.findOne({
            _id: id
        }, function (err, result) {
            console.log('log: ' + result);
            if((err) || (!result)){
                return res.redirect('/clients');
            }

            res.tpl.client = result;
            return next();
        });

    };

};