(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InlineResponse2004', '../model/InlineResponse2003', '../model/Body'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2004'), require('../model/InlineResponse2003'), require('../model/Body'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.UsersApi = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.InlineResponse2004, root.CoinbaseApi.InlineResponse2003, root.CoinbaseApi.Body);
  }
}(this, function(ApiClient, InlineResponse2004, InlineResponse2003, Body) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 2.0.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the userAuthGet operation.
     * @callback module:api/UsersApi~userAuthGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show authorization information
     * Get current user’s authorization information including granted scopes and send limits when using OAuth2 authentication.
     * @param {module:api/UsersApi~userAuthGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2004}
     */
    this.userAuthGet = function(callback) {
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
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/user/auth', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGet operation.
     * @callback module:api/UsersApi~userGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show current user
     * Get current user’s public information. To get user’s email or private information, use permissions wallet:user:email and wallet:user:read.
     * @param {module:api/UsersApi~userGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2003}
     */
    this.userGet = function(callback) {
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
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userPut operation.
     * @callback module:api/UsersApi~userPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update current user
     * Modify current user and their preferences.
     * @param {Object} opts Optional parameters
     * @param {module:model/Body} opts.body Properties to update
     * @param {module:api/UsersApi~userPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2003}
     */
    this.userPut = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/user', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUserIdGet operation.
     * @callback module:api/UsersApi~usersUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show a user
     * Get any user’s public information with their ID.
     * @param {String} userId The user id
     * @param {module:api/UsersApi~usersUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InlineResponse2003}
     */
    this.usersUserIdGet = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling usersUserIdGet";
      }


      var pathParams = {
        'user_id': userId
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
        '/users/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
