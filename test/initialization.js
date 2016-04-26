var CoinbaseApi = require('../test-javascript-client/src'),
  should = require('chai').should(),
  params = require('./param-pool'),
  supertest = require('supertest'),
  api = supertest('https://api.sandbox.coinbase.com');

require('dotenv').load();

CoinbaseApi.ApiClient.instance.authentications
  .coinbaseAccessCode.accessToken = process.env.COINBASE_ACCESS_CODE;

var addressesApi = new CoinbaseApi.AddressesApi(),
  accountsApi = new CoinbaseApi.AccountsApi(),
  usersApi = new CoinbaseApi.UsersApi();

function getRandomName() {
  var letters = 'abcdefghijklnmopqrstuvwxyz',
    name = '';
  for  (var i = 0; i < 10; i++) {
    name = name + letters[Math.floor(Math.random() * (letters.length - 1))];
  }
  return name;
}

before(function(done) {
  this.timeout(8000);

  var tasks = 3;
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
    should.exist(data.data.id);
    params.set('account_id', data.data.id);
    addressesApi.accountsAccountIdAddressesPost(params.get('account_id'), {},
      function(error, data, response) {
        should.not.exist(error);
        response.statusCode.should.equal(201);
        should.exist(data.data.address);
        params.set('address_id', data.data.id);
        taskDone();
      });

    api.post('/v2/accounts/' + params.get('account_id') + '/transactions')
      .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
      .set('Accept', 'application/json')
      .send({
        "type": "request",
        "to": getRandomName() + "@coinfabrik.com",
        "amount": "0.001",
        "currency": "BTC"
      })
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res.body.data.status);
        params.set('transaction_id', res.body.data.id);
        taskDone();
      });
  });

  usersApi.userGet(function(err, data) {
    should.not.exist(err);
    should.exist(data.data.id);
    params.set('user_id', data.data.id);
    taskDone();
  });

});