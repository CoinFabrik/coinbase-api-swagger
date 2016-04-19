var CoinbaseApi = require('../javascript-client/src'),
  should = require('chai').should(),
  ids = require('./id-pool');

require('dotenv').load();

CoinbaseApi.ApiClient.instance.authentications
  .coinbaseAccessCode.accessToken = process.env.COINBASE_ACCESS_CODE;

var addressesApi = new CoinbaseApi.AddressesApi(),
  accountsApi = new CoinbaseApi.AccountsApi(),
  usersApi = new CoinbaseApi.UsersApi();


before(function(done) {
  this.timeout(8000);

  var tasks = 2;
  function taskDone() {
    tasks--;
    if (tasks === 0) {
      done();
    }
  }

  accountsApi.accountsPost({
    'accountProperties': {
      name: 'test account'
    }
  }, function(error, data) {
    should.not.exist(error);
    ids.account_id = data.data.id;
    addressesApi.accountsAccountIdAddressesPost(ids.account, {}, function(error, data, response) {
      should.not.exist(error);
      response.statusCode.should.equal(201);
      should.exist(data.data.address);
      ids.address_id = data.data.id;
      taskDone();
    });
  });

  usersApi.userGet(function(err, data) {
    should.not.exist(err);
    should.exist(data.data.id);
    ids.user_id = data.data.id;
    taskDone();
  });

});