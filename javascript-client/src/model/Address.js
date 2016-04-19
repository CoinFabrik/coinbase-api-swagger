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
    root.CoinbaseApi.Address = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Address model module.
   * @module model/Address
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
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
   * Bitcoin address
   * @member {String} address
   */
  exports.prototype['address'] = undefined;

  /**
   * Timestamp indicating when was the address was created.
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Timestamp indicating when was the address last updated.
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;

  /**
   * This value is always 'address'.
   * @member {String} resource
   */
  exports.prototype['resource'] = undefined;

  /**
   * @member {String} resource_path
   */
  exports.prototype['resource_path'] = undefined;




  return exports;
}));
