var requireOption = require('../common').requireOption;


/**
 * Check if the client has the correct
 * type of driver~s license to be authorized to drive the car
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {

        console.log("Checking if client authoirzed to drive car...");

        console.log(res.tpl.car);

        //checking only if car state is occupied
        if(typeof res.tpl.car !== 'undefined' && res.tpl.state === 'occupied'){
            if(typeof res.tpl.client === 'undefined'){
                return next(new Error('Cant check if client authorized to drive the vehicle!'));
            }

            var clientLicence = res.tpl.client.licence;
            var carLicence = res.tpl.car.type;

            //Mondjuk azt, hogy lefelé kompatibilis a jogsi
            if(carLicence > clientLicence){
                return next(new Error('Client is not authorized to drive the vehicle!'))
            }
        }

        return next();
    }

};