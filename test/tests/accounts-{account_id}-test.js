'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('https://api.sandbox.coinbase.com'); // supertest init;

var should = chai.should();

require('dotenv').load();

describe('/accounts/{account_id}', function() {
  describe('get', function() {
    it('should respond with 200 The account', function(done) {
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
              "name": {
                "type": "string",
                "description": "User or system defined name"
              },
              "primary": {
                "type": "boolean",
                "description": "Indicates if this is a primary account"
              },
              "type": {
                "type": "string",
                "description": "Account’s type. Available values: wallet, fiat, multisig, vault, multisig_vault"
              },
              "currency": {
                "type": "string",
                "description": "Account's currency"
              },
              "balance": {
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
              "native_balance": {
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
              "created_at": {
                "type": "string",
                "description": "Timestamp indicating when was the account created."
              },
              "updated_at": {
                "type": "string",
                "description": "Timestamp indicating when was the account last updated."
              },
              "resource": {
                "type": "string",
                "description": "This value is always 'account'."
              },
              "resource_path": {
                "type": "string"
              }
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/v2/accounts/' + require('../param-pool').get('account_id') + '')
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

  describe('put', function() {
    it('should respond with 200 The account', function(done) {
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
              "name": {
                "type": "string",
                "description": "User or system defined name"
              },
              "primary": {
                "type": "boolean",
                "description": "Indicates if this is a primary account"
              },
              "type": {
                "type": "string",
                "description": "Account’s type. Available values: wallet, fiat, multisig, vault, multisig_vault"
              },
              "currency": {
                "type": "string",
                "description": "Account's currency"
              },
              "balance": {
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
              "native_balance": {
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
              "created_at": {
                "type": "string",
                "description": "Timestamp indicating when was the account created."
              },
              "updated_at": {
                "type": "string",
                "description": "Timestamp indicating when was the account last updated."
              },
              "resource": {
                "type": "string",
                "description": "This value is always 'account'."
              },
              "resource_path": {
                "type": "string"
              }
            }
          }
        }
      };

      /*eslint-enable*/
      api.put('/v2/accounts/' + require('../param-pool').get('account_id') + '')
      .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
      .set('Accept', 'application/json')
      .send({
        name:'sarasa'
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        validator.validate(res.body, schema).should.be.true;
        done();
      });
    });

  });

  describe('delete', function() {
    var accountForDeletion;
    before(function(done) {
      api.post('/v2/accounts')
        .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
        .set('Accept', 'application/json')
        .send({
          name: 'account to be deleted'
        })
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          should.exist(res.body.data.id);
          accountForDeletion = res.body.data.id;
          done();
        });
    });
    it('should respond with 204 No content', function(done) {
      api.del('/v2/accounts/' + accountForDeletion)
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
