var requireOption = require('../common').requireOption;


/**
 * Check if the client has the correct
 * type of driver~s license to be authorized to drive the car
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');
    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {
        return next();
    }

};