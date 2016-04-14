var CoinbaseApi = require('../../javascript-client/src'),
  should = require('chai').should(),
  ids = require('../id-pool');

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
    it('should retrieve a list of all the user\'s accounts', function (done) {
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
      }
    };
    it('should create a new account', function (done) {
      accountsApi.accountsPost(opts, getSuccessChecker(['primary', 'type', 'currency'], done));
    });
    after(function() {
      //todo: delete account
    })
  });

});

describe('/accounts/{account_id}', function() {
  describe('get', function () {
    it('should get the account', function (done) {
      accountsApi.accountsAccountIdGet(ids.account, getSuccessChecker(['currency', 'balance'], done));
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
        ids.account,
        opts,
        getSuccessChecker(['currency', 'balance'], done)
      );
    });
  });
  describe('delete', function () {
    var accountToDelete;
    before(function(done) {
      //create the account to be deleted
      accountsApi.accountsPost({
        accountProperties: {
          name: 'asdf'
        }
      }, function(err, data, response) {
        should.not.exist(err);
        accountToDelete = data.data.id;
        done();
      });
    });
    it('should delete an account', function (done) {
      accountsApi.accountsAccountIdDelete(accountToDelete, function (err, data, response) {
        response.statusCode.should.equal(204);
        done();
      });
    });
  });
});

describe('/accounts/{account_id}/primary', function() {
  describe('get', function () {
    it('should set the account as primary', function (done) {
      accountsApi.accountsAccountIdPrimaryGet(ids.account, getSuccessChecker(['primary', 'currency', 'balance'], done));
    });
  });
});
