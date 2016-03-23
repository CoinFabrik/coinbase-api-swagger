(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './MoneyHash'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MoneyHash'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinbaseApi) {
      root.CoinbaseApi = {};
    }
    root.CoinbaseApi.Account = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.MoneyHash);
  }
}(this, function(ApiClient, MoneyHash) {
  'use strict';

  /**
   * The Account model module.
   * @module model/Account
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('primary')) {
        obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = MoneyHash.constructFromObject(data['balance']);
      }
      if (data.hasOwnProperty('native_balance')) {
        obj['native_balance'] = MoneyHash.constructFromObject(data['native_balance']);
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
      }
      if (data.hasOwnProperty('resource_path')) {
        obj['resource_path'] = ApiClient.convertToType(data['resource_path'], 'String');
      }
    }
    return obj;
  }


  /**
   * Resource ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * User or system defined name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Indicates if this is a primary account
   * @member {Boolean} primary
   */
  exports.prototype['primary'] = undefined;

  /**
   * Account’s type. Available values: wallet, fiat, multisig, vault, multisig_vault
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Account's currency
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;

  /**
   * Balance in BTC
   * @member {module:model/MoneyHash} balance
   */
  exports.prototype['balance'] = undefined;

  /**
   * Balance in user’s native currency
   * @member {module:model/MoneyHash} native_balance
   */
  exports.prototype['native_balance'] = undefined;

  /**
   * This value is always 'account'.
   * @member {String} resource
   */
  exports.prototype['resource'] = undefined;

  /**
   * @member {String} resource_path
   */
  exports.prototype['resource_path'] = undefined;




  return exports;
}));
