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
  describe('put', function () {
    it('should update the user\'s name', function (done) {
      function getRandomName() {
        var letters = 'abcdefghijklnmopqrstuvwxyz',
          name = '';
        for  (var i = 0; i < 10; i++) {
          name = name + letters[Math.floor(Math.random() * (letters.length - 1))];
        }
        return name;
      }
      var name = getRandomName();
      console.log(name);
      var opts = {
         body: {name: name} // {Body} Properties to update
      };
      usersApi.userPut(opts, function(error, data, response) {
        if (error) {
          console.log(error.text);
        }

        should.not.exist(error);
        response.statusCode.should.equal(200);
        data.data.name.should.equal(name);
        done();
      });
    });
  });
});
