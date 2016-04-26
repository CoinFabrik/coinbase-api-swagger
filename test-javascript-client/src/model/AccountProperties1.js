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
    root.CoinbaseApi.AccountProperties1 = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccountProperties1 model module.
   * @module model/AccountProperties1
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>AccountProperties1</code>.
   * @alias module:model/AccountProperties1
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AccountProperties1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountProperties1} obj Optional instance to populate.
   * @return {module:model/AccountProperties1} The populated <code>AccountProperties1</code> instance.
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
