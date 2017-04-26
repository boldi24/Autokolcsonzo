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
        //for renting the car
        if(typeof req.body.currClient !== 'undefined'){
            console.log("bement");
            id = req.body.currClient;
            console.log("az id" + id);
            if(id == 0) {
                console.log("next lesz hívva");
                return next();
            }

            //for adding client modfying stuff
        } else if(typeof req.params.id !== 'undefined'){
            id = req.params.id;
        } else{
            return next();
        }

        clientModel.findOne({
            _id: id
        }, function (err, result) {
            if((err) || (!result)){
                return res.redirect('/clients');
            }

            res.tpl.client = result;
            return next();
        });

    };

};