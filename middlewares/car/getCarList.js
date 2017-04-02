var requireOption = require('../common').requireOption;

/**
 * Get the car list (regardless of category) and put the cars on res.tpl.cars
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        var cars = [];

        var car1 = {
            id: 1,
            name: "Trabant",
            plate: "HUF-111",
            state: "occupied",
            chassisnum: "hjk",
            type: "B",
            doors: 3
        };
        cars.push(car1);

        var car2 = {
            id: 2,
            name: "Merci",
            plate: "HRF-555",
            state: "occupied",
            chassisnum: "sdfhjkhjksd545",
            type: "A",
            doors: 1
        };
        cars.push(car2);

        var car3 = {
            id: 3,
            name: "Porshe",
            plate: "ASD-151",
            state: "free",
            chassisnum: "sdfsd545",
            type: "B",
            doors: 3
        };
        cars.push(car3);

        var car4 = {
            id: 4,
            name: "Audi",
            plate: "ASD-555",
            state: "free",
            chassisnum: "dfgdf",
            type: "C",
            doors: 2
        };
        cars.push(car4)

        res.tpl.cars = cars;

        return next();
    }

};