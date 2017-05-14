/**
 * Check if client to be deleted is assigned to car, if yes error will be thrown, client cant be deleted
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {

        if(typeof res.tpl.cars === 'undefined' || typeof res.tpl.client === 'undefined'){
            return next(new Error('Cant check if client assigned to car!'));
        }

        res.tpl.cars.forEach(function (car) {
            if(res.tpl.client.equals(car._currClient)){
                return next(new Error('Client cant be deleted since it is assigned to car!'));
            }
        });

        return next();
    }

};