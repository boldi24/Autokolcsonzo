var requireOption = require('../common').requireOption;


/**
 * deletes the Car object
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        if(typeof  res.tpl.car === 'undefined'){
            return next();
        }

        res.tpl.car.remove(function (err) {
            if(err){
                return next(err);
            }

            return next();
        });
    }

};