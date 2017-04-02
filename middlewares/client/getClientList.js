var requireOption = require('../common').requireOption;

/*
* Get the client list and put the clients on res.tpl.clients
* */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {

        var mockClients = [];

        var client1 = {
            id: 1,
            name: 'Geza',
            phone: '+3630123456789',
            nationalId: 'SDFSDFSDF',
            address: 'Budpaest fő utca 2',
            licence: 'B'
        };
        mockClients.push(client1);

        var client2 = {
            id: 2,
            name: 'Józsi',
            phone: '+36301232256789',
            nationalId: 'SDFSDFSDF',
            address: 'Budpaest fő utca 6',
            licence: 'C'
        };
        mockClients.push(client2);

        res.tpl.clients = mockClients;
        return next();
    }

};