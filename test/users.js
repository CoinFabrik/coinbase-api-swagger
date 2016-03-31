var CoinbaseApi = require('../javascript-client/src'),
  should = require('chai').should();

CoinbaseApi.ApiClient.instance.authentications
  .coinbaseAccessCode.accessToken = require('../config').accessToken;

var usersApi = new CoinbaseApi.UsersApi();

function getSuccessChecker(properties, done) {
  return function(error, data, response) {
    should.not.exist(error);
    response.statusCode.should.equal(200);
    properties.forEach(p => {
      should.exist(data.data[p]);
    });
    done();
  };
}

describe('/user', function() {
  describe('get', function () {
    it('should respond with the current user', function (done) {
      usersApi.userGet(getSuccessChecker(['username'], done));
    });
  });

  describe('put', function () {
    //TODO: Figure our the error "Limit is invalid"
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

describe('/user/auth', function() {
  describe('get', function () {
    it('should show authorization information', function (done) {
      usersApi.userAuthGet(getSuccessChecker(['scopes'], done));
    });
  });
});

describe('/user/{user_id}', function() {
  describe('get', function () {
    it('should show the user', function (done) {
      usersApi.usersUserIdGet('891ae771-ce5a-5014-801b-5461b5481e80', getSuccessChecker(['username'], done));
    });
  });
});