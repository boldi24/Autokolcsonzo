var requireOption = require('../common').requireOption;


/**
 * Checks if carModel exists on objRep, also checks that the correct attributes exist
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {
        return next();
    }

};