var CoinbaseApi = require('../javascript-client/src'),
  should = require('chai').should();

CoinbaseApi.ApiClient.instance.authentications
  .coinbaseAccessCode.accessToken = require('../config').accessToken;

var addressesApi = new CoinbaseApi.AddressesApi(),
  accountsApi = new CoinbaseApi.AccountsApi();

function getSuccessChecker(properties, done) {
  return function(error, data, response) {
    should.not.exist(error);
    properties.forEach(p => {
      should.exist(data.data[p]);
    });
    done();
  };
}

var accountId, addressId;
before(function(done) {
  this.timeout(8000);
  accountsApi.accountsGet(function(error, data, response) {
    response.statusCode.should.equal(200);
    data.data.should.be.an('array');
    accountId = data.data[0].id;

    addressesApi.accountsAccountIdAddressesPost(accountId, {}, function(error, data, response) {
      response.statusCode.should.equal(201);
      console.log(JSON.stringify(data.data));
      should.exist(data.data.address);
      addressId = data.data.id;
      done();
    });
  });
});

describe('/accounts/{account_id}/addresses', function() {
  describe('get', function () {
    it('should retrieve a list of all the account\'s addresses', function (done) {
      addressesApi.accountsAccountIdAddressesGet(accountId, function(error, data, response) {
        should.not.exist(error);
        response.statusCode.should.equal(200);
        should.exist(data.data);
        data.data.should.be.a('array');
        done();
      });
    });
  });
});