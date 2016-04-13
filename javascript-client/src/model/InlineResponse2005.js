(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './InlineResponse2005Data'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2005Data'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.InlineResponse2005 = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.InlineResponse2005Data);
  }
}(this, function(ApiClient, InlineResponse2005Data) {
  'use strict';

  /**
   * The InlineResponse2005 model module.
   * @module model/InlineResponse2005
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:model/InlineResponse2005
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = InlineResponse2005Data.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/InlineResponse2005Data} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
