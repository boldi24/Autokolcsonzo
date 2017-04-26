var requireOption = require('../common').requireOption;


/**
 * deletes the Car object
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        if(res.tpl.car === 'undefined'){
            return next(new Error('There is no car to deleted!'));
        }

        res.tpl.car.remove(function (err) {
            if(err){
                return next(err);
            }

            return next();
        });
    }

};