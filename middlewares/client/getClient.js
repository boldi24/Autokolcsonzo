var requireOption = require('../common').requireOption;

/**
 * Fetches the client
 * if doesnt exist -> redirect to /clients
 * if does exist -> put on res.tpl.client
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {
        return next();
    }

};