(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Account', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Account'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.InlineResponse200 = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.Account, root.CoinbaseApi.Pagination);
  }
}(this, function(ApiClient, Account, Pagination) {
  'use strict';

  /**
   * The InlineResponse200 model module.
   * @module model/InlineResponse200
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Account]);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;

  /**
   * @member {Array.<module:model/Account>} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
