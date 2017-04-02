var requireOption = require('../common').requireOption;

/**
 * Get the free cars that can be rented and put the cars on res.tpl.cars
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        var freeCars = [];

        var car3 = {
            id: 3,
            name: "Porshe",
            plate: "ASD-151",
            state: "free",
            chassisnum: "sdfsd545",
            type: "B",
            doors: 3
        };
        freeCars.push(car3);

        var car4 = {
            id: 4,
            name: "Audi",
            plate: "ASD-555",
            state: "free",
            chassisnum: "dfgdf",
            type: "C",
            doors: 2
        };
        freeCars.push(car4);

        res.tpl.cars = freeCars;

        return next();
    }

};