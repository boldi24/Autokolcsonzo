var requireOption = require('../common').requireOption;

/**
 * checks if all attributes of client are in the correct format (e.g. phone number)
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {
        return next();
    }

};