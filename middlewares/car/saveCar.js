var requireOption = require('../common').requireOption;

/**
 * Saves the car object
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        var car = undefined;

        if(typeof res.tpl.car === 'undefined'){
            car = new carModel();
            car.name = req.body.name;
            car.chassisnum = req.body.chassisnum;
            car.type = req.body.type;
            car.doors = req.body.doors;
        } else {
            car = res.tpl.car;
        }

        car.plate = req.body.plate;

        if(typeof req.body.start === 'undefined'
            && typeof req.body.end === 'undefined'
            && typeof res.tpl.client === 'undefined'){
            car.start = "";
            car.end = "";
            car.state = "free";
        } else {
            car.start = req.body.start;
            car.end = req.body.end;
            car._currClient = res.tpl.client;
            car.state = "occupied";
        }

        console.log("saving car" + car);

        car.save(function (err, result) {
            if(err){
                return err;
            }

            if(car.state === 'free'){
                return res.redirect('/freecars');
            } else {
                return res.redirect('/occopiedcars');
            }
        });

    }

};