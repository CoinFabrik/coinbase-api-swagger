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
    root.CoinbaseApi.AccountProperties2 = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccountProperties2 model module.
   * @module model/AccountProperties2
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>AccountProperties2</code>.
   * @alias module:model/AccountProperties2
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AccountProperties2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountProperties2} obj Optional instance to populate.
   * @return {module:model/AccountProperties2} The populated <code>AccountProperties2</code> instance.
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
   * Address label
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));
