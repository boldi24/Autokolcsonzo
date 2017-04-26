var renderMW = require('../middlewares/generic/render');

var checkCarDataMW = require('../middlewares/car/checkCarData');
var checkIfClientAuthorizedToDriveMW = require('../middlewares/car/checkIfClientAuthorizedToDrive');
var validateCarDataMW = require('../middlewares/car/validateCarData');
var saveCarMW = require('../middlewares/car/saveCar');
var getCarListMW = require('../middlewares/car/getCarList');
var deleteCarMW = require('../middlewares/car/deleteCar');
var getCarMW = require('../middlewares/car/getCar');
var getOccopiedCarListMW = require('../middlewares/car/getOccopiedCarList');
var getFreeCarListMW = require('../middlewares/car/getFreeCarList');

var getClientMW = require('../middlewares/client/getClient');
var getClientListMW = require('../middlewares/client/getClientList');

var clientModel = require('../models/client');
var carModel = require('../models/car');

module.exports = function (app) {

    var objectRepository = {
        clientModel: clientModel,
        carModel: carModel
    };

    app.get('/cars/add',
        renderMW(objectRepository, 'caradd')
    );

    app.post('/cars/add',
        checkCarDataMW(objectRepository),
        validateCarDataMW(objectRepository),
        saveCarMW(objectRepository)
    );

    app.get('/cars/del/:id',
        getCarMW(objectRepository),
        deleteCarMW(objectRepository),
        function (req, res, next) {
            return res.redirect('back');
        }
    );

    app.get('/cars/mod/:id',
        getCarMW(objectRepository),
        getClientListMW(objectRepository),
        renderMW(objectRepository, 'carmod')
    );

    app.post('/cars/mod/:id',
        getCarMW(objectRepository),
        getClientMW(objectRepository),
        checkCarDataMW(objectRepository),
        validateCarDataMW(objectRepository),
        checkIfClientAuthorizedToDriveMW(objectRepository),
        saveCarMW(objectRepository)
    );

    app.get('/occopiedcars',
        getOccopiedCarListMW(objectRepository),
        renderMW(objectRepository, 'caroccall')
    );

    app.get('/freecars',
        getFreeCarListMW(objectRepository),
        renderMW(objectRepository, 'carfreeall')
    );


};