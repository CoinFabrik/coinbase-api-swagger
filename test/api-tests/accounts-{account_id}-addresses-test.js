'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('https://api.sandbox.coinbase.com'); // supertest init;
var swagger = require('../../swagger.json');
var ids = require('../id-pool');

chai.should();

describe('/accounts/{account_id}/addresses', function() {
  describe('get', function() {
    it('should respond with 200 The addresses', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "pagination": {
            "$ref": "#/definitions/Pagination"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Address"
            }
          }
        },
        definitions: swagger.definitions
      };

      /*eslint-enable*/
      api.get('/v2/accounts/' + ids.account + '/addresses')
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

  describe('post', function() {
    it('should respond with 201 The created address', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/definitions/Address"
          }
        },
        definitions: swagger.definitions
      };

      /*eslint-enable*/
      api.post('/v2/accounts/' + ids.account + '/addresses')
      .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
      .set('Accept', 'application/json')
      .send({
        name: 'Test account'
      })
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);

        validator.validate(res.body, schema).should.be.true;
        done();
      });
    });

  });

});
