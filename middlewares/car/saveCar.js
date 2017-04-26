var requireOption = require('../common').requireOption;

/**
 * Saves the car object
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    return function (req, res, next) {
        //console.log("saving car" + car);

        if(res.tpl.car === 'undefined'){
            return next(new Error('There is no car to be saved!'));
        }

        res.tpl.car.save(function (err, result) {
            if(err){
                return err;
            }

            if(res.tpl.car.state === 'free'){
                return res.redirect('/freecars');
            } else {
                return res.redirect('/occopiedcars');
            }
        });

    }

};