(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination', './Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.InlineResponse2002 = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.Pagination, root.CoinbaseApi.Transaction);
  }
}(this, function(ApiClient, Pagination, Transaction) {
  'use strict';

  /**
   * The InlineResponse2002 model module.
   * @module model/InlineResponse2002
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Transaction]);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;

  /**
   * @member {Array.<module:model/Transaction>} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
