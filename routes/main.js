var mainRedirectMW = require('../middlewares/generic/redirect');


module.exports = function (app) {
    /**
     * Main page
     */
    app.get('/',
        mainRedirectMW()
    );

}