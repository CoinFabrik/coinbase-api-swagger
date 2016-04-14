var CoinbaseApi = require('../javascript-client/src'),
  should = require('chai').should(),
  ids = require('./id-pool');

require('dotenv').load();

CoinbaseApi.ApiClient.instance.authentications
  .coinbaseAccessCode.accessToken = process.env.COINBASE_ACCESS_CODE;

var addressesApi = new CoinbaseApi.AddressesApi(),
  accountsApi = new CoinbaseApi.AccountsApi();


before(function(done) {
  this.timeout(8000);
  accountsApi.accountsPost({
    'accountProperties': {
      name: 'test account'
    }
  }, function(error, data, response) {
    should.not.exist(error);
    ids.account = data.data.id;
    addressesApi.accountsAccountIdAddressesPost(ids.account, {}, function(error, data, response) {
      should.not.exist(error);
      response.statusCode.should.equal(201);
      should.exist(data.data.address);
      ids.address = data.data.id;
      done();
    });
  });
});