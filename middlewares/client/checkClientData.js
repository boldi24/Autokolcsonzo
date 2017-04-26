var requireOption = require('../common').requireOption;

/**
 * Checks if clientModel exists on objRep, also checks that the correct attributes exist
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {

        if(typeof res.tpl.client === 'undefined'){

            if(
                (typeof req.body.name === 'undefined') ||
                (typeof req.body.nationalId === 'undefined') ||
                (typeof req.body.phone === 'undefined') ||
                (typeof req.body.address === 'undefined') ||
                (typeof req.body.car === 'undefined')
            ){
                console.log('Nem jó adat');
                return next(new Error('There are unfilled fields'));
            }

            res.tpl.client = new clientModel();

            res.tpl.client.name = req.body.name;
            res.tpl.client.nationalId = req.body.nationalId;
            res.tpl.client.phone = req.body.phone;
            res.tpl.client.address = req.body.address;
            res.tpl.client.licence = req.body.car;
        }

        return next();
    }

};