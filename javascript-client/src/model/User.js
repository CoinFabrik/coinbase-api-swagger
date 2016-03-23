(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.User = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('profile_location')) {
        obj['profile_location'] = ApiClient.convertToType(data['profile_location'], 'String');
      }
      if (data.hasOwnProperty('profile_bio')) {
        obj['profile_bio'] = ApiClient.convertToType(data['profile_bio'], 'String');
      }
      if (data.hasOwnProperty('profile_url')) {
        obj['profile_url'] = ApiClient.convertToType(data['profile_url'], 'String');
      }
      if (data.hasOwnProperty('avatar_url')) {
        obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
      }
      if (data.hasOwnProperty('resource_path')) {
        obj['resource_path'] = ApiClient.convertToType(data['resource_path'], 'String');
      }
    }
    return obj;
  }


  /**
   * Resource ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * User’s public name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;

  /**
   * Location for user’s public profile
   * @member {String} profile_location
   */
  exports.prototype['profile_location'] = undefined;

  /**
   * Bio for user’s public profile
   * @member {String} profile_bio
   */
  exports.prototype['profile_bio'] = undefined;

  /**
   * Public profile location if user has one
   * @member {String} profile_url
   */
  exports.prototype['profile_url'] = undefined;

  /**
   * User’s avatar url
   * @member {String} avatar_url
   */
  exports.prototype['avatar_url'] = undefined;

  /**
   * @member {String} resource
   */
  exports.prototype['resource'] = undefined;

  /**
   * @member {String} resource_path
   */
  exports.prototype['resource_path'] = undefined;




  return exports;
}));
