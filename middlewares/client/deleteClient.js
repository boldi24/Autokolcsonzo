var requireOption = require('../common').requireOption;

/**
 * deletes the client object
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {

        if(res.tpl.client === 'undefined'){
            return next(new Error('There is nothing to be deleted!'));
        }

        res.tpl.client.remove(function (err) {
           if(err){
               return next(err);
           }

           return next();
        });
    }

};