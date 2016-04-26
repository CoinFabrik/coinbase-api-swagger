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
    root.CoinbaseApi.MoneyHash = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MoneyHash model module.
   * @module model/MoneyHash
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>MoneyHash</code>.
   * @alias module:model/MoneyHash
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>MoneyHash</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoneyHash} obj Optional instance to populate.
   * @return {module:model/MoneyHash} The populated <code>MoneyHash</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;

  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;




  return exports;
}));
