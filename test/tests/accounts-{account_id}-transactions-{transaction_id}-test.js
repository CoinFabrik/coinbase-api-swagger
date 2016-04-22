'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('https://api.sandbox.coinbase.com'); // supertest init;

chai.should();

require('dotenv').load();

describe('/accounts/{account_id}/transactions/{transaction_id}', function() {
  describe('get', function() {
    it('should respond with 200 The requested transaction', function(done) {
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
              "type": {
                "type": "string",
                "description": "Transaction type"
              },
              "status": {
                "type": "string",
                "description": "Status"
              },
              "amount": {
                "type": "object",
                "properties": {
                  "amount": {
                    "type": "string"
                  },
                  "currency": {
                    "type": "string"
                  }
                }
              },
              "native_amount": {
                "type": "object",
                "properties": {
                  "amount": {
                    "type": "string"
                  },
                  "currency": {
                    "type": "string"
                  }
                }
              },
              "description": {
                "type": ["string", "null"],
                "description": "User defined description"
              },
              "instant_exchange": {
                "type": "boolean",
                "description": "Indicator if the transaction was instant exchanged (received into a bitcoin address for a fiat account)"
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
              },
              "details": {
                "type": "object",
                "description": "Detailed information about the transaction"
              },
              "network": {
                "type": [
                  "object",
                  "null"
                ],
                "description": "Information about bitcoin network including network transaction hash if transaction was on-blockchain. Only available for certain types of transactions"
              },
              "to": {
                "type": [
                  "object",
                  "null"
                ],
                "description": "The receiving party of a debit transaction. Usually another resource but can also be another type like email. Only available for certain types of transactions"
              },
              "from": {
                "type": [
                  "object",
                  "null"
                ],
                "description": "The originating party of a credit transaction. Usually another resource but can also be another type like bitcoin network. Only available for certain types of transactions"
              },
              "address": {
                "type": [
                  "object",
                  "null"
                ],
                "description": "Associated bitcoin address for received payment"
              },
              "application": {
                "type": [
                  "object",
                  "null"
                ],
                "description": "Associated OAuth2 application"
              }
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/v2/accounts/' + require('../param-pool').get('account_id') + '/transactions/' + require('../param-pool').get('transaction_id') + '')
      .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        var isValid = validator.validate(res.body, schema);
        JSON.stringify(validator.lastReport.errors).should.equal('[]');
        isValid.should.be.true;
        done();
      });
    });

  });

  describe('delete', function() {
    it('should respond with 200 Success response (no...', function(done) {
      api.del('/v2/accounts/' + require('../param-pool').get('account_id') + '/transactions/' + require('../param-pool').get('transaction_id') + '')
      .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
      .set('Accept', 'application/json')
      .expect(204)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.should.equal(null); // non-json response or no schema
        done();
      });
    });

  });

});
