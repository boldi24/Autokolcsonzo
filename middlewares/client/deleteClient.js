var requireOption = require('../common').requireOption;

/**
 * deletes the client object
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {

        if(typeof  res.tpl.client === 'undefined'){
            return next();
        }

        res.tpl.client.remove(function (err) {
           if(err){
               return next(err);
           }

           return next();
        });
    }

};