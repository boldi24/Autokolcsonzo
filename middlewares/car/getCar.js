var requireOption = require('../common').requireOption;

/**
 * Fetches the car
 * if doesnt exist -> go back
 * if does exist -> put on res.tpl.car
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        var car1 = {
            id: 1,
            name: "Trabant",
            plate: "HUF-111",
            state: "occupied",
            chassisnum: "hjk",
            type: "A",
            doors: 3,
            currClient: 2,
            start: "2017-06-18",
            end: "2017-06-32"
        };

        var car2 = {
            id: 2,
            name: "Merci",
            plate: "HRF-555",
            state: "occupied",
            chassisnum: "sdfhjkhjksd545",
            type: "A",
            doors: 1,
            currClient: 1,
            start: "2017-06-18",
            end: "2017-07-18"
        };

        var car3 = {
            id: 3,
            name: "Porshe",
            plate: "ASD-151",
            state: "free",
            chassisnum: "sdfsd545",
            type: "B",
            doors: 3
        };

        var car4 = {
            id: 4,
            name: "Audi",
            plate: "ASD-555",
            state: "free",
            chassisnum: "dfgdf",
            type: "C",
            doors: 2
        };

        var id = req.params.id;

        if(id == 1){
            res.tpl.car = car1;
        } else if(id == 2){
            res.tpl.car = car2;
        } else if(id == 3){
            res.tpl.car = car3;
        } else if(id == 4){
            res.tpl.car = car4;
        } else {
            res.redirect('back');
        }

        return next();
    }

};