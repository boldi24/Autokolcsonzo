var requireOption = require('../common').requireOption;

/**
 * deletes the client object
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {
        return next();
    }

};