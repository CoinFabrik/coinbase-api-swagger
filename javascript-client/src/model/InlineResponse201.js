(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Account'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Account'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.InlineResponse201 = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.Account);
  }
}(this, function(ApiClient, Account) {
  'use strict';

  /**
   * The InlineResponse201 model module.
   * @module model/InlineResponse201
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse201</code>.
   * @alias module:model/InlineResponse201
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201} obj Optional instance to populate.
   * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Account.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Account} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
