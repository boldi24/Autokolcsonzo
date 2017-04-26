var requireOption = require('../common').requireOption;

/**
 * saves the client object
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {


        if(res.tpl.client === 'undefined'){
            return next(new Error('There is nothing to be saved!'));
        }

        res.tpl.client.save(function (err, result) {
           if(err){
               return err;
           }

           return res.redirect('/clients');
        });
    }

};