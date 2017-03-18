var requireOption = require('../common').requireOption;

/**
 * validates the attribute values of the car object (e.g. license plate has the following format: XXX-000 )
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {
        return next();
    }

};