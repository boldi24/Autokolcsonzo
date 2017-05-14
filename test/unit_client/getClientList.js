var expect = require('chai').expect;
var getClientListMW = require('../../middlewares/client/getClientList');

describe('getClientListMW', function() {

    it('should return all the clients', function(done) {
        var req = {};
        var res = {
            tpl: {}
        };

        var fakeClientModel = {
            find: function(some, cb){
                cb(undefined, ['client1', 'client2'])
            }
        };

        getClientListMW({
            clientModel: fakeClientModel
        })(req, res, function(err){
            expect(res.tpl.clients).to.eql(['client1', 'client2']);
            expect(err).to.eql(undefined);
            done();
        })
    });

    it('should return error when db returns error', function(done){
       var fakeClientModel = {
           find: function(some, cb){
               cb('DB error', undefined)
           }
       };

       getClientListMW({
           clientModel: fakeClientModel
       })({}, {}, function(err){
           expect(err).to.eql(new Error('Error getting clients'));
           done();
       });
    });
});