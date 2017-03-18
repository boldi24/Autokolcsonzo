var renderMW = require('../middlewares/generic/render');
var checkClientDataMW = require('../middlewares/client/checkClientData');
var validateClientDataMW = require('../middlewares/client/validateClientData');
var saveClientMW = require('../middlewares/client/saveClient');
var getClientListMW = require('../middlewares/client/getClientList');
var deleteClientMW = require('../middlewares/client/deleteClient');
var getClientMW = require('../middlewares/client/getClient');

var clientModel = {};

module.exports = function (app) {

    var objectRepository = {
        clientModel: clientModel
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
        getClientListMW(objectRepository),
        deleteClientMW(objectRepository)
    );

    app.get('/clients/mod/:id',
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