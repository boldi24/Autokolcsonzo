var requireOption = require('../common').requireOption;

/**
 * Get the rented cars that are currently at a client and put the cars on res.tpl.cars
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {
        return next();
    }

};