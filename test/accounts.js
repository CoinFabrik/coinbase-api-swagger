var CoinbaseApi = require('../javascript-client/src'),
  should = require('chai').should();

CoinbaseApi.ApiClient.instance.authentications
  .coinbaseAccessCode.accessToken = require('../config').accessToken;

var accountsApi = new CoinbaseApi.AccountsApi();

function getSuccessChecker(properties, done) {
  return function(error, data, response) {
    should.not.exist(error);
    properties.forEach(p => {
      should.exist(data.data[p]);
    });
    done();
  };
}

describe('/accounts', function() {
  describe('get', function () {
    it('should show the accounts', function (done) {
      accountsApi.accountsGet(function(error, data, response) {
        should.not.exist(error);
        response.statusCode.should.equal(200);
        should.exist(data.data);
        data.data.should.be.a('array');
        done();
      });
    });
  });
  describe('post', function () {
    var opts = {
      'accountProperties': {
        name: 'asdf'
      } // {AccountProperties} Account properties
    };
    it('should create a new account', function (done) {
      accountsApi.accountsPost(opts, getSuccessChecker(['primary', 'type', 'currency'], done));
    });
  });

});

describe('/accounts/{account_id}', function() {
  describe('get', function () {
    it('should get the account', function (done) {
      accountsApi.accountsAccountIdGet("f4018402-30f0-58b1-81ba-065fb517ff22", getSuccessChecker(['currency', 'balance'], done));
    });
  });
});