var requireOption = require('../common').requireOption;

/**
 * Get the free cars that can be rented and put the cars on res.tpl.cars
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        carModel.find({ state : "free"}, function (err, result) {
            if(err){
                return next(new Error('Error getting cars'));
            }

            res.tpl.cars = result;
            return next();
        });

    }

};