'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('https://api.sandbox.coinbase.com'); // supertest init;

chai.should();

require('dotenv').load();

describe('/users/{user_id}', function() {
  describe('get', function() {
    it('should respond with 200 The requested user', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "required": [
              "id",
              "avatar_url",
              "resource",
              "resource_path"
            ],
            "properties": {
              "id": {
                "type": "string",
                "description": "Resource ID"
              },
              "name": {
                "type": [
                  "string",
                  "null"
                ],
                "description": "User’s public name"
              },
              "username": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "profile_location": {
                "type": [
                  "string",
                  "null"
                ],
                "description": "Location for user’s public profile"
              },
              "profile_bio": {
                "type": [
                  "string",
                  "null"
                ],
                "description": "Bio for user’s public profile"
              },
              "profile_url": {
                "type": [
                  "string",
                  "null"
                ],
                "description": "Public profile location if user has one"
              },
              "avatar_url": {
                "type": "string",
                "description": "User’s avatar url"
              },
              "resource": {
                "type": "string"
              },
              "resource_path": {
                "type": "string"
              }
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/v2/users/' + require('../param-pool').get('user_id') + '')
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
