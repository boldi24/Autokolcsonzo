var requireOption = require('../common').requireOption;

/**
 * Fetches the client
 * if doesnt exist -> redirect to /clients
 * if does exist -> put on res.tpl.client
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {

        var client1 = {
            id: 1,
            name: 'Geza',
            phone: '+3630123456789',
            nationalId: 'SDFSDFSDF',
            address: 'Budpaest fő utca 2',
            licence: 'B'
        };

        var client2 = {
            id: 2,
            name: 'Józsi',
            phone: '+36301232256789',
            nationalId: 'SDFSDFSDF',
            address: 'Budpaest fő utca 6',
            licence: 'C'
        };

        var id = req.params.id;

        if(id == 1){
            res.tpl.client = client1;
        } else if (id == 2){
            res.tpl.client = client2;
        } else{
            return res.redirect('/clients');
        }

        return next();
    }

};