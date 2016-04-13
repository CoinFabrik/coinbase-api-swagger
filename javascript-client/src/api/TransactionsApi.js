(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InlineResponse2002', '../model/TransactionOptions', '../model/InlineResponse2003'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2002'), require('../model/TransactionOptions'), require('../model/InlineResponse2003'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.TransactionsApi = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.InlineResponse2002, root.CoinbaseApi.TransactionOptions, root.CoinbaseApi.InlineResponse2003);
  }
}(this, function(ApiClient, InlineResponse2002, TransactionOptions, InlineResponse2003) {
  'use strict';

  /**
   * Transactions service.
   * @module api/TransactionsApi
   * @version 2.0.0
   */

  /**
   * Constructs a new TransactionsApi. 
   * @alias module:api/TransactionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountsAccountIdTransactionsGet operation.
     * @callback module:api/TransactionsApi~accountsAccountIdTransactionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List transactions
     * Lists account\u2019s transactions. See Transaction resource for more information.
     * @param {String} accountId The account id
     * @param {module:api/TransactionsApi~accountsAccountIdTransactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2002}
     */
    this.accountsAccountIdTransactionsGet = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling accountsAccountIdTransactionsGet";
      }


      var pathParams = {
        'account_id': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['coinbaseAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/accounts/{account_id}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdTransactionsPost operation.
     * @callback module:api/TransactionsApi~accountsAccountIdTransactionsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send or request money
     * Type&#x3D;send\n&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;\n\nSend funds to a bitcoin address or email address. No transaction fees are required for off blockchain transactions, and Coinbase waives fees for on-blockchain transactions greater than 0.0001 BTC, up to a threshold of 25 per day. Read more about free transactions.\n\nWhen used with OAuth2 authentication, this endpoint requires two factor authentication unless used with wallet:transactions:send:bypass-2fa scope.\n\nIf the user is able to buy bitcoin, they can send funds from their fiat account using instant exchange feature. Buy fees will be included in the created transaction and the recipient will receive the user defined amount.\n\nTo create a multisig transaction, visit Multisig documentation.\n\nType&#x3D;request\n&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;\n\nRequests money from an email address.\n
     * @param {String} accountId The account id
     * @param {module:model/TransactionOptions} transactionOptions 
     * @param {module:api/TransactionsApi~accountsAccountIdTransactionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.accountsAccountIdTransactionsPost = function(accountId, transactionOptions, callback) {
      var postBody = transactionOptions;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling accountsAccountIdTransactionsPost";
      }

      // verify the required parameter 'transactionOptions' is set
      if (transactionOptions == undefined || transactionOptions == null) {
        throw "Missing the required parameter 'transactionOptions' when calling accountsAccountIdTransactionsPost";
      }


      var pathParams = {
        'account_id': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['coinbaseAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/accounts/{account_id}/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdTransactionsTransactionIdCompletePost operation.
     * @callback module:api/TransactionsApi~accountsAccountIdTransactionsTransactionIdCompletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete request money
     * Lets the recipient of a money request complete the request by sending money to the user who requested the money. This can only be completed by the user to whom the request was made, not the user who sent the request.
     * @param {String} accountId The account id
     * @param {String} transactionId The transaction id
     * @param {module:api/TransactionsApi~accountsAccountIdTransactionsTransactionIdCompletePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.accountsAccountIdTransactionsTransactionIdCompletePost = function(accountId, transactionId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling accountsAccountIdTransactionsTransactionIdCompletePost";
      }

      // verify the required parameter 'transactionId' is set
      if (transactionId == undefined || transactionId == null) {
        throw "Missing the required parameter 'transactionId' when calling accountsAccountIdTransactionsTransactionIdCompletePost";
      }


      var pathParams = {
        'account_id': accountId,
        'transaction_id': transactionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['coinbaseAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/accounts/{account_id}/transactions/{transaction_id}/complete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdTransactionsTransactionIdDelete operation.
     * @callback module:api/TransactionsApi~accountsAccountIdTransactionsTransactionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel request money
     * Lets a user cancel a money request. Money requests can be canceled by the sender or the recipient.
     * @param {String} accountId The account id
     * @param {String} transactionId The transaction id
     * @param {module:api/TransactionsApi~accountsAccountIdTransactionsTransactionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.accountsAccountIdTransactionsTransactionIdDelete = function(accountId, transactionId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling accountsAccountIdTransactionsTransactionIdDelete";
      }

      // verify the required parameter 'transactionId' is set
      if (transactionId == undefined || transactionId == null) {
        throw "Missing the required parameter 'transactionId' when calling accountsAccountIdTransactionsTransactionIdDelete";
      }


      var pathParams = {
        'account_id': accountId,
        'transaction_id': transactionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['coinbaseAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/accounts/{account_id}/transactions/{transaction_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdTransactionsTransactionIdGet operation.
     * @callback module:api/TransactionsApi~accountsAccountIdTransactionsTransactionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show a transaction
     * Show an individual transaction for an account. See Transaction resource for more information.
     * @param {String} accountId The account id
     * @param {String} transactionId The transaction id
     * @param {module:api/TransactionsApi~accountsAccountIdTransactionsTransactionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2003}
     */
    this.accountsAccountIdTransactionsTransactionIdGet = function(accountId, transactionId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling accountsAccountIdTransactionsTransactionIdGet";
      }

      // verify the required parameter 'transactionId' is set
      if (transactionId == undefined || transactionId == null) {
        throw "Missing the required parameter 'transactionId' when calling accountsAccountIdTransactionsTransactionIdGet";
      }


      var pathParams = {
        'account_id': accountId,
        'transaction_id': transactionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['coinbaseAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/accounts/{account_id}/transactions/{transaction_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdTransactionsTransactionIdResendPost operation.
     * @callback module:api/TransactionsApi~accountsAccountIdTransactionsTransactionIdResendPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Re-send request money
     * Lets the user resend a money request. This will notify recipient with a new email.
     * @param {String} accountId The account id
     * @param {String} transactionId The transaction id
     * @param {module:api/TransactionsApi~accountsAccountIdTransactionsTransactionIdResendPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.accountsAccountIdTransactionsTransactionIdResendPost = function(accountId, transactionId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling accountsAccountIdTransactionsTransactionIdResendPost";
      }

      // verify the required parameter 'transactionId' is set
      if (transactionId == undefined || transactionId == null) {
        throw "Missing the required parameter 'transactionId' when calling accountsAccountIdTransactionsTransactionIdResendPost";
      }


      var pathParams = {
        'account_id': accountId,
        'transaction_id': transactionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['coinbaseAccessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/accounts/{account_id}/transactions/{transaction_id}/resend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
