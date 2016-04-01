(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InlineResponse2011', '../model/InlineResponse2002', '../model/InlineResponse2001', '../model/AccountProperties2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2011'), require('../model/InlineResponse2002'), require('../model/InlineResponse2001'), require('../model/AccountProperties2'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.AddressesApi = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.InlineResponse2011, root.CoinbaseApi.InlineResponse2002, root.CoinbaseApi.InlineResponse2001, root.CoinbaseApi.AccountProperties2);
  }
}(this, function(ApiClient, InlineResponse2011, InlineResponse2002, InlineResponse2001, AccountProperties2) {
  'use strict';

  /**
   * Addresses service.
   * @module api/AddressesApi
   * @version 2.0.0
   */

  /**
   * Constructs a new AddressesApi. 
   * @alias module:api/AddressesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountsAccountIdAddressesAddressIdGet operation.
     * @callback module:api/AddressesApi~accountsAccountIdAddressesAddressIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show an address
     * Show an individual address for an account.\nRegular bitcoin address can be used in place of address_id but the address has to be associated to the correct account.\n  \n*Important* Addresses should be considered one time use only.
     * @param {module:api/AddressesApi~accountsAccountIdAddressesAddressIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2011}
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
      var returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/accounts/{account_id}/addresses/{address_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdAddressesAddressIdTransactionsGet operation.
     * @callback module:api/AddressesApi~accountsAccountIdAddressesAddressIdTransactionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List address’s transactions
     * list transactions that have been sent to a specific address. Regular bitcoin address can be used in place of address_id but the address has to be associated to the correct account.
     * @param {module:api/AddressesApi~accountsAccountIdAddressesAddressIdTransactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2002}
     */
    this.accountsAccountIdAddressesAddressIdTransactionsGet = function(callback) {
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
        '/accounts/{account_id}/addresses/{address_id}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the accountsAccountIdAddressesGet operation.
     * @callback module:api/AddressesApi~accountsAccountIdAddressesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List addresses
     * Lists addresses for an account.\n\n*Important*: Addresses should be considered one time use only.
     * @param {module:api/AddressesApi~accountsAccountIdAddressesGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the accountsAccountIdAddressesPost operation.
     * @callback module:api/AddressesApi~accountsAccountIdAddressesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create address
     * Creates a new address for an account. As all the arguments are optinal, it’s possible just to do a empty POST which will create a new address. This is handy if you need to create new receive addresses for an account on-demand.\n\n\nAddresses can be created for all account types. With fiat accounts, funds will be received with Instant Exchange.
     * @param {Object} opts Optional parameters
     * @param {module:model/AccountProperties2} opts.accountProperties Properties to update
     * @param {module:api/AddressesApi~accountsAccountIdAddressesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2011}
     */
    this.accountsAccountIdAddressesPost = function(opts, callback) {
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
      var returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/accounts/{account_id}/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
