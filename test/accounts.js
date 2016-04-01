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
  var account1, account2;
  before(function(done) {
    this.timeout(4000);
    //create two accounts
    accountsApi.accountsPost({
      'accountProperties': {
        name: 'account1'
      }
    }, function(error, data, response) {
      should.not.exist(error);
      account1 = data.data.id;
      accountsApi.accountsPost({
        'accountProperties': {
          name: 'account2'
        }
      }, function(error, data) {
        should.not.exist(error);
        account2 = data.data.id;
        console.log('Accounts: ' + account1 + ', ' + account2);
        done();
      });
    });
  });
  describe('get', function () {
    it('should get the account', function (done) {
      accountsApi.accountsAccountIdGet(account1, getSuccessChecker(['currency', 'balance'], done));
    });
  });
  describe('put', function () {
    it('should update the account\'s name', function (done) {
      var opts = {
        'accountProperties': {
          name: 'asdf'
        }
      };
      accountsApi.accountsAccountIdPut(
        account1,
        opts,
        getSuccessChecker(['currency', 'balance'], done)
      );
    });
  });
  describe('delete', function () {
    it('should delete an account', function (done) {
      accountsApi.accountsAccountIdDelete(account2, function (err, data, response) {
        response.statusCode.should.equal(204);
        done();
      });
    });
  });
});
