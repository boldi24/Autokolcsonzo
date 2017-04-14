var requireOption = require('../common').requireOption;

/**
 * saves the client object
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {

        if(
            (typeof req.body.name === 'undefined') ||
            (typeof req.body.nationalId === 'undefined') ||
            (typeof req.body.phone === 'undefined') ||
            (typeof req.body.address === 'undefined') ||
            (typeof req.body.car === 'undefined')
        ){
            console.log('SSSSSSSSS');
            return next();
        }

        var client = undefined;

        if(typeof res.tpl.client === 'undefined'){
            client = new clientModel();
        } else {
            client = res.tpl.client;
        }

        client.name = req.body.name;
        client.nationalId = req.body.nationalId;
        client.phone = req.body.phone;
        client.address = req.body.address;
        client.licence = req.body.car;

        client.save(function (err, result) {
           if(err){
               return err;
           }

           return res.redirect('/clients');
        });
    }

};