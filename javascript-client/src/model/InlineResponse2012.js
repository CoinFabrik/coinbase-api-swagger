(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.InlineResponse2012 = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.Transaction);
  }
}(this, function(ApiClient, Transaction) {
  'use strict';

  /**
   * The InlineResponse2012 model module.
   * @module model/InlineResponse2012
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2012</code>.
   * @alias module:model/InlineResponse2012
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>InlineResponse2012</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2012} obj Optional instance to populate.
   * @return {module:model/InlineResponse2012} The populated <code>InlineResponse2012</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Transaction.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Transaction} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
