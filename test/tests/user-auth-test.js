'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('https://api.sandbox.coinbase.com'); // supertest init;

chai.should();

require('dotenv').load();

describe('/user/auth', function() {
  describe('get', function() {
    it('should respond with 200 The requested user', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "method": {
                "type": "string"
              },
              "scopes": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "oauth_meta": {
                "type": "object"
              }
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/v2/user/auth')
      .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        validator.validate(res.body, schema).should.be.true;
        done();
      });
    });

  });

});
