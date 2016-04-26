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
    root.CoinbaseApi.InlineResponse2004Data = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse2004Data model module.
   * @module model/InlineResponse2004Data
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2004Data</code>.
   * @alias module:model/InlineResponse2004Data
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>InlineResponse2004Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004Data} The populated <code>InlineResponse2004Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('oauth_meta')) {
        obj['oauth_meta'] = ApiClient.convertToType(data['oauth_meta'], Object);
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {String} method
   */
  exports.prototype['method'] = undefined;

  /**
   * @member {Object} oauth_meta
   */
  exports.prototype['oauth_meta'] = undefined;

  /**
   * @member {Array.<String>} scopes
   */
  exports.prototype['scopes'] = undefined;




  return exports;
}));
