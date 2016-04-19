var should = require('chai').should();

describe('generate-tests', function() {
  describe('#replaceParamsPlaceholders', function() {
    it('should replace "{some_id PARAM GOES HERE}" with a call to param-pool.js', function() {
      var text = 'asdfqwer {some_id PARAM GOES HERE} qwerwqe',
        replaceParamsPlaceholders = require('../generate-tests').replaceParamsPlaceholders;
      var newText = replaceParamsPlaceholders(text);
      newText.should.equal('asdfqwer \' + require(\'../param-pool\')' +
        '.get(\'some_id\') + \' qwerwqe');
    });
  });
});