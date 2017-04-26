var requireOption = require('../common').requireOption;

/**
 * checks if all attributes of client are in the correct format (e.g. phone number)
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {

        //ID
        if(res.tpl.client.nationalId.length !== 8){
            console.log('Nem jó a személyi');
            return next(new Error('NationalId incorrect'));
        }

        //phone number
        if(res.tpl.client.phone.length !== 11 || isNaN(res.tpl.client.phone)){
            console.log(isNaN(res.tpl.client.phone));
            console.log('Nem jó telószám');
            return next(new Error('Telephone not correct'));
        }

        return next();
    }

};