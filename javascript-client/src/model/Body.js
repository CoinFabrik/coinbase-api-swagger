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
    root.CoinbaseApi.Body = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Body model module.
   * @module model/Body
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Body</code>.
   * @alias module:model/Body
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body} obj Optional instance to populate.
   * @return {module:model/Body} The populated <code>Body</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('time_zone')) {
        obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
      }
      if (data.hasOwnProperty('native_currency')) {
        obj['native_currency'] = ApiClient.convertToType(data['native_currency'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} time_zone
   */
  exports.prototype['time_zone'] = undefined;

  /**
   * @member {String} native_currency
   */
  exports.prototype['native_currency'] = undefined;




  return exports;
}));
