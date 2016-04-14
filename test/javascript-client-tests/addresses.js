var CoinbaseApi = require('../../javascript-client/src'),
  should = require('chai').should(),
  ids = require('../id-pool');


var addressesApi = new CoinbaseApi.AddressesApi();



describe('/accounts/{account_id}/addresses', function() {
  describe('get', function () {
    it('should retrieve a list of all the account\'s addresses', function (done) {
      addressesApi.accountsAccountIdAddressesGet(ids.account, function(error, data, response) {
        should.not.exist(error);
        response.statusCode.should.equal(200);
        should.exist(data.data);
        data.data.should.be.a('array');
        done();
      });
    });
  });

  describe('post', function() {
    var addressId;
    it('should create a new address for the acccount', function(done) {
      addressesApi.accountsAccountIdAddressesPost(ids.account, {}, function(error, data, response) {
        response.statusCode.should.equal(201);
        console.log(JSON.stringify(data.data));
        should.exist(data.data.address);
        addressId = data.data.id;
        done();
      });
    });
    after(function() {
      //todo: remove address
    });
  })
});

describe('/accounts/{account_id}/addresses/{address_id}', function() {
  describe('get', function() {
    it('should get the address details', function(done) {
      addressesApi.accountsAccountIdAddressesAddressIdGet(ids.account, ids.address, function(err, data) {
        should.not.exist(err);
        should.exist(data.data.address);
        done();
      })
    })
  });
});

describe('/accounts/{account_id}/addresses/{address_id}/transactions', function() {
  describe('get', function() {
    it('should get the address transactions', function(done) {
      addressesApi.accountsAccountIdAddressesAddressIdTransactionsGet(ids.account, ids.address, function(err, data) {
        should.not.exist(err);
        should.exist(data.data);
        data.data.should.be.an('array');
        done();
      })
    })
  });
});