var requireOption = require('../common').requireOption;

/**
 * Checks if clientModel exists on objRep, also checks that the correct attributes exist
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {
        return next();
    }

};