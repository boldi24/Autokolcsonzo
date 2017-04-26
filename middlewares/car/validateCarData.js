var requireOption = require('../common').requireOption;

/**
 * validates the attribute values of the car object (e.g. license plate has the following format: XXX-000 )
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {

        console.log("Validating car data");

        //licence plate
        var plateRegex = new RegExp("[A-Z]{3}-[0-9]{3}");
        if(res.tpl.car.plate.length === 0 || !plateRegex.test(res.tpl.car.plate)){
            return next(new Error('Licence plate does not have the correct format!'));
        }

        if(res.tpl.car.state === 'occupied' &&
            (res.tpl.car.start == null || res.tpl.car.end == null)){
            return next(new Error('Start or end dates are empty!'));
        } else if(res.tpl.car.start > res.tpl.car.end){
            return next(new Error('Start date must precede end date!'));
        }

        return next();
    }

};