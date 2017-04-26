var requireOption = require('../common').requireOption;


/**
 * Checks if carModel exists on objRep, also checks that the correct attributes exist
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        if(typeof res.tpl.car === 'undefined'){
            res.tpl.car = new carModel();
            res.tpl.car.name = req.body.name;
            res.tpl.car.chassisnum = req.body.chassisnum;
            res.tpl.car.type = req.body.type;
            res.tpl.car.doors = req.body.doors;
        }

        res.tpl.car.plate = req.body.plate;
        // if client is not provided the car will be free
        if(typeof res.tpl.client === 'undefined'){
            console.log("Az autó nem lesz bérelve");
            res.tpl.car.start = "";
            res.tpl.car.end = "";
            res.tpl.car.state = "free";
            res.tpl.car._currClient = null;
            //to be able to rent a car client has to be provided (in validateClientData dates will be checke)
        } else if(typeof res.tpl.client !== 'undefined'){
            res.tpl.car.start = req.body.start;
            res.tpl.car.end = req.body.end + "";
            res.tpl.car._currClient = res.tpl.client;
            res.tpl.car.state = "occupied";
        } else {
            return next(new Error('The beginning, the end and the client need to be provided for a successful rental!'));
        }
        return  next();
    }

};