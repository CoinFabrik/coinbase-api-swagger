var CoinbaseApi = require('../javascript-client/src'),
  should = require('chai').should();

CoinbaseApi.ApiClient.instance.authentications
  .coinbaseAccessCode.accessToken = require('../config').accessToken;

var usersApi = new CoinbaseApi.UsersApi();

describe('/user', function() {
  describe('get', function () {
    it('should respond with the current user', function (done) {
      usersApi.userGet(function(error, data, response) {
        should.not.exist(error);
        response.statusCode.should.equal(200);
        should.exist(data.data.username);
        done();
      });
    });
  });
});
