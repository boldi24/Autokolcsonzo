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

var clientModel = {};
var carModel = {};


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
        getCarListMW(objectRepository),
        deleteCarMW(objectRepository)
    );

    app.get('/cars/mod/:id',
        renderMW(objectRepository, 'carmod')
    );

    app.post('/cars/mod/:id',
        getCarMW(objectRepository),
        checkCarDataMW(objectRepository),
        validateCarDataMW(objectRepository),
        getClientMW(objectRepository),
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