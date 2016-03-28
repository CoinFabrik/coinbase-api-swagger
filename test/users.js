var should = require('chai').should();

var CoinbaseApi = require('../javascript-client/src');
var defaultClient = CoinbaseApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = require('../config').accessToken;

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
