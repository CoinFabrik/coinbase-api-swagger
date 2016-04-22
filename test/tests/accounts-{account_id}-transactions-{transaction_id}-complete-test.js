'use strict';
var chai = require('chai');
var supertest = require('supertest');
var api = supertest('https://api.sandbox.coinbase.com'); // supertest init;

chai.should();

require('dotenv').load();

describe('/accounts/{account_id}/transactions/{transaction_id}/complete', function() {
  describe('post', function() {
    it('should respond with 200 Success response (no...', function(done) {
      api.post('/v2/accounts/' + require('../param-pool').get('account_id') + '/transactions/' + require('../param-pool').get('transaction_id') + '/complete')
      .set('Authorization', 'Bearer ' + process.env.COINBASE_ACCESS_CODE)
      .set('Accept', 'application/json')
      .send({
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.should.equal(null); // non-json response or no schema
        done();
      });
    });

  });

});
