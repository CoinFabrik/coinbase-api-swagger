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
    root.CoinbaseApi.Pagination = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Pagination model module.
   * @module model/Pagination
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * @alias module:model/Pagination
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pagination} obj Optional instance to populate.
   * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ending_before')) {
        obj['ending_before'] = ApiClient.convertToType(data['ending_before'], 'Integer');
      }
      if (data.hasOwnProperty('starting_after')) {
        obj['starting_after'] = ApiClient.convertToType(data['starting_after'], 'Integer');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Integer');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('previous_uri')) {
        obj['previous_uri'] = ApiClient.convertToType(data['previous_uri'], 'String');
      }
      if (data.hasOwnProperty('next_uri')) {
        obj['next_uri'] = ApiClient.convertToType(data['next_uri'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} ending_before
   */
  exports.prototype['ending_before'] = undefined;

  /**
   * @member {Integer} starting_after
   */
  exports.prototype['starting_after'] = undefined;

  /**
   * @member {Integer} limit
   */
  exports.prototype['limit'] = undefined;

  /**
   * @member {String} order
   */
  exports.prototype['order'] = undefined;

  /**
   * @member {String} previous_uri
   */
  exports.prototype['previous_uri'] = undefined;

  /**
   * @member {String} next_uri
   */
  exports.prototype['next_uri'] = undefined;




  return exports;
}));
