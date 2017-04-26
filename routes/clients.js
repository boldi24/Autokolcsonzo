var renderMW = require('../middlewares/generic/render');
var checkClientDataMW = require('../middlewares/client/checkClientData');
var validateClientDataMW = require('../middlewares/client/validateClientData');
var saveClientMW = require('../middlewares/client/saveClient');
var getClientListMW = require('../middlewares/client/getClientList');
var deleteClientMW = require('../middlewares/client/deleteClient');
var getClientMW = require('../middlewares/client/getClient');
var checkIfClientAssignedToCarMW = require('../middlewares/client/checkIfClientAssignedToCar');

var getCarListMW = require('../middlewares/car/getCarList');

var clientModel = require('../models/client');
var carModel = require('../models/car');

module.exports = function (app) {

    var objectRepository = {
        clientModel: clientModel,
        carModel: carModel
    };

    app.get('/clients/add',
        renderMW(objectRepository, 'clientadd')
    );

    app.post('/clients/add',
        checkClientDataMW(objectRepository),
        validateClientDataMW(objectRepository),
        saveClientMW(objectRepository)
    );

    app.get('/clients/del/:id',
        getClientMW(objectRepository),
        getCarListMW(objectRepository),
        checkIfClientAssignedToCarMW(objectRepository),
        deleteClientMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/clients');
        }
    );

    app.get('/clients/mod/:id',
        getClientMW(objectRepository),
        renderMW(objectRepository, 'clientmod')
    );

    app.post('/clients/mod/:id',
        getClientMW(objectRepository),
        checkClientDataMW(objectRepository),
        validateClientDataMW(objectRepository),
        saveClientMW(objectRepository)
    );

    app.get('/clients',
        getClientListMW(objectRepository),
        renderMW(objectRepository, 'clientall')
    );

    
};