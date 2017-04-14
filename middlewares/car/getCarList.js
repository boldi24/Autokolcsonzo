var requireOption = require('../common').requireOption;

/**
 * Get the car list (regardless of category) and put the cars on res.tpl.cars
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        carModel.find({}, function (err, result) {
            if(err){
                return next(new Error('Error getting cars'));
            }

            res.tpl.cars = result;
            return next();
        });
    }

};