/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to
 *    - /freecars
 */
module.exports = function () {

    return function (req, res, next) {
        return next();
    };

};