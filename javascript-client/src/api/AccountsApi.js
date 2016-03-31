(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InlineResponse2002', '../model/InlineResponse2001', '../model/InlineResponse201', '../model/AccountProperties1', '../model/InlineResponse200', '../model/AccountProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2002'), require('../model/InlineResponse2001'), require('../model/InlineResponse201'), require('../model/AccountProperties1'), require('../model/InlineResponse200'), require('../model/AccountProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.AccountsApi = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.InlineResponse2002, root.CoinbaseApi.InlineResponse2001, root.CoinbaseApi.InlineResponse201, root.CoinbaseApi.AccountProperties1, root.CoinbaseApi.InlineResponse200, root.CoinbaseApi.AccountProperties);
  }
}(this, function(ApiClient, InlineResponse2002, InlineResponse2001, InlineResponse201, AccountProperties1, InlineResponse200, AccountProperties) {
  'use strict';

  /**
   * Accounts service.
   * @module api/AccountsApi
   * @version 2.0.0
   */

  /**
   * Constructs a new AccountsApi. 
   * @alias module:api/AccountsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountsAccountIdAddressesAddressIdGet operation.
     * @callback module:api/AccountsApi~accountsAccountIdAddressesAddressIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show an address
     * Show an individual address for an account.\nRegular bitcoin address can be used in place of address_id but the address has to be associated to the correct account.\n  \n*Important* Addresses should be considered one time use only.
     * @param {module:api/AccountsApi~accountsAccountIdAddressesAddressIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2002}
     */
    this.accountsAccountIdAddressesAddressIdGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
        '/accounts/{account_id}/addresses/{address_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdAddressesGet operation.
     * @callback module:api/AccountsApi~accountsAccountIdAddressesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List addresses
     * Lists addresses for an account.\n\n*Important*: Addresses should be considered one time use only.
     * @param {module:api/AccountsApi~accountsAccountIdAddressesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2001}
     */
    this.accountsAccountIdAddressesGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/accounts/{account_id}/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdDelete operation.
     * @callback module:api/AccountsApi~accountsAccountIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete account
     * Removes user’s account. In order to remove an account it can’t be\n\n- Primary account\n- Account with non-zero balance\n- Fiat account\n- Vault with a pending withdrawal
     * @param {module:api/AccountsApi~accountsAccountIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.accountsAccountIdDelete = function(callback) {
      var postBody = null;


      var pathParams = {
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
        '/accounts/{account_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdGet operation.
     * @callback module:api/AccountsApi~accountsAccountIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show an account
     * Show current user’s account. To access user’s primary account, primary keyword can be used instead of the account id in the URL.
     * @param {String} accountId The account id
     * @param {module:api/AccountsApi~accountsAccountIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse201}
     */
    this.accountsAccountIdGet = function(accountId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling accountsAccountIdGet";
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/accounts/{account_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdPrimaryGet operation.
     * @callback module:api/AccountsApi~accountsAccountIdPrimaryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set account as primary
     * Promote an account as primary account.
     * @param {module:api/AccountsApi~accountsAccountIdPrimaryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse201}
     */
    this.accountsAccountIdPrimaryGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/accounts/{account_id}/primary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdPut operation.
     * @callback module:api/AccountsApi~accountsAccountIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update account
     * Modifies user’s account name.
     * @param {String} accountId The account id
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountProperties1} opts.accountProperties Properties to update
     * @param {module:api/AccountsApi~accountsAccountIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse201}
     */
    this.accountsAccountIdPut = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['accountProperties'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling accountsAccountIdPut";
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/accounts/{account_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsGet operation.
     * @callback module:api/AccountsApi~accountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List accounts
     * Lists current user’s accounts to which the authentication method has access to.
     * @param {module:api/AccountsApi~accountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse200}
     */
    this.accountsGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsPost operation.
     * @callback module:api/AccountsApi~accountsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create account
     * Creates a new account for user.
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountProperties} opts.accountProperties Account properties
     * @param {module:api/AccountsApi~accountsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse201}
     */
    this.accountsPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['accountProperties'];


      var pathParams = {
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
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/accounts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
