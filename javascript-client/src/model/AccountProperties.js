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
    root.CoinbaseApi.AccountProperties = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccountProperties model module.
   * @module model/AccountProperties
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>AccountProperties</code>.
   * @alias module:model/AccountProperties
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AccountProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountProperties} obj Optional instance to populate.
   * @return {module:model/AccountProperties} The populated <code>AccountProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }


  /**
   * New account name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));
