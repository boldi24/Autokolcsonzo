var expect = require('chai').expect;
var checkIfClientAssignedToCarMW = require('../../middlewares/client/checkIfClientAssignedToCar');

describe('checkIfClientAssignedToCar middleware', function () {

    it('should return error when cars does not exist on res.tpl', function(done){
        var res = {
            tpl: {}
        };

        checkIfClientAssignedToCarMW(undefined)({}, res, function(err){
            expect(err).to.eql(new Error('Cant check if client assigned to car!'));
            done();
        })
    });

    describe('there is a cars obj on res.tpl', function(){

        var res = {
            tpl: {
                cars: []
            }
        };

        var car1 = {
            _currClient: 'client1'
        };

        var car2 = {
            _currClient: 'client2'
        };

        res.tpl.cars.push(car1);
        res.tpl.cars.push(car2);

        //client nem létezik
        it('should return error when client does not exist on res.tpl', function(done){
            checkIfClientAssignedToCarMW(undefined)({}, res, function(err){
               expect(err).to.eql(new Error('Cant check if client assigned to car!'));
               done();
            });
        });

        describe('there is a client obj on res.tpl as well', function () {

            before(function () {
                res.tpl.client = {
                    equals: function (checkId) {
                        return this.id === checkId;
                    }
                };
            });

            //client már assignolva van, nem engedjük tovább a middlewaret
            it('should return error when client is assigned to one of the cars', function(done){
                res.tpl.client.id = 'client1';

                checkIfClientAssignedToCarMW(undefined)({}, res, function (err) {
                    expect(err).to.eql(new Error('Client cant be deleted since it is assigned to car!'));
                    done();
                })

            });

            //client nincs assignolva akkor csak next hiívás, error undefined
            it('should call next and err should be undefined if no car is assigned to client', function(done){
                res.tpl.client.id = 'client3';

                checkIfClientAssignedToCarMW(undefined)({}, res, function (err) {
                    expect(err).to.be.an('undefined');
                    done();
                });

            });

        });

    })
});