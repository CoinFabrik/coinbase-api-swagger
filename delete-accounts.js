var CoinbaseApi = require('./test-javascript-client/src'),
  should = require('chai').should();

require('dotenv').load();

CoinbaseApi.ApiClient.instance.authentications
  .coinbaseAccessCode.accessToken = process.env.COINBASE_ACCESS_CODE;

var accountsApi = new CoinbaseApi.AccountsApi();

accountsApi.accountsGet(function(error, data, response) {
  should.not.exist(error);
  data.data.forEach(function(account) {
    accountsApi.accountsAccountIdDelete(account.id, function (err, data, response) {
      if (!err) {
        console.log('account ' + account.id + ' deleted');
      }
    });
  });
});