'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('https://api.sandbox.coinbase.com'); // supertest init;

chai.should();

require('dotenv').load();

describe('/accounts/{account_id}/addresses/{address_id}', function() {
  describe('get', function() {
    it('should respond with 200 The address', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "description": "Resource ID"
              },
              "address": {
                "type": "string",
                "description": "Bitcoin address"
              },
              "name": {
                "type": [
                  "string",
                  "null"
                ],
                "description": "User defined label for the address"
              },
              "created_at": {
                "type": "string",
                "description": "Timestamp indicating when was the address was created."
              },
              "updated_at": {
                "type": "string",
                "description": "Timestamp indicating when was the address last updated."
              },
              "resource": {
                "type": "string",
                "description": "This value is always 'address'."
              },
              "resource_path": {
                "type": "string"
              }
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/v2/accounts/' + require('../param-pool').get('account_id') + '/addresses/' + require('../param-pool').get('address_id') + '')
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
