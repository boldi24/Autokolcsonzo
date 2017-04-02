var requireOption = require('../common').requireOption;

/**
 * Get the rented cars that are currently at a client and put the cars on res.tpl.cars
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        var occupiedCars = [];

        var car1 = {
            id: 1,
            name: "Trabant",
            plate: "HUF-111",
            state: "occupied",
            chassisnum: "hjk",
            type: "B",
            doors: 3
        };
        occupiedCars.push(car1);

        var car2 = {
            id: 2,
            name: "Merci",
            plate: "HRF-555",
            state: "occupied",
            chassisnum: "sdfhjkhjksd545",
            type: "A",
            doors: 1
        };
        occupiedCars.push(car2);

        res.tpl.cars = occupiedCars;

        return next();
    }

};