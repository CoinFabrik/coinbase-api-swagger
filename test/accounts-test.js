'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('https://api.sandbox.coinbase.com'); // supertest init;
var swagger = require('../swagger.json');
chai.should();

require('dotenv').load();

describe('/accounts', function() {
  describe('get', function() {
    it('should respond with 200 The accounts', function(done) {
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
              "$ref": "#/definitions/Account"
            }
          }
        },
        definitions: swagger.definitions
      };

      /*eslint-enable*/
      api.get('/v2/accounts')
      .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        var isValid = validator.validate(res.body, schema);
        console.log(JSON.stringify(validator.lastReport));
        JSON.stringify(validator.lastReport.errors).should.equal('[]');
        isValid.should.be.true;
        //validator.validate(res.body, schema).should.be.true;
        done();
      });
    });

  });

  describe('post', function() {
    it('should respond with 201 The created account', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/definitions/Account"
          }
        },
        definitions: swagger.definitions
      };

      /*eslint-enable*/
      api.post('/v2/accounts')
      .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
      .set('Accept', 'application/json')
      .send({
        name: 'sarasa'
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
