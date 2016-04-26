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
    root.CoinbaseApi.TransactionOptions = factory(root.CoinbaseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransactionOptions model module.
   * @module model/TransactionOptions
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>TransactionOptions</code>.
   * @alias module:model/TransactionOptions
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>TransactionOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionOptions} obj Optional instance to populate.
   * @return {module:model/TransactionOptions} The populated <code>TransactionOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('skip_notifications')) {
        obj['skip_notifications'] = ApiClient.convertToType(data['skip_notifications'], 'Boolean');
      }
      if (data.hasOwnProperty('fee')) {
        obj['fee'] = ApiClient.convertToType(data['fee'], 'String');
      }
      if (data.hasOwnProperty('idem')) {
        obj['idem'] = ApiClient.convertToType(data['idem'], 'String');
      }
    }
    return obj;
  }


  /**
   * Type should be \\\"send\\\" for sending money, or \\\"request\\\" for requesting money.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * A bitcoin address (send only) or an email of the recipient (send or request)
   * @member {String} to
   */
  exports.prototype['to'] = undefined;

  /**
   * Amount to be sent/requested.
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;

  /**
   * Currency for the amount
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;

  /**
   * Notes to be included in the email that the recipient receives
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * (Send only) Don\u2019t send notification emails for small amounts (e.g. tips)
   * @member {Boolean} skip_notifications
   */
  exports.prototype['skip_notifications'] = undefined;

  /**
   * (Send only) Transaction fee in BTC if you would like to pay it. Coinbase pays transaction fees on payments greater than or equal to 0.0001 BTC. But for smaller amounts you may want to add your own amount. Fees can be added as a string, such as 0.0005
   * @member {String} fee
   */
  exports.prototype['fee'] = undefined;

  /**
   * (Send only) A token to ensure idempotence. If a previous transaction with the same idem parameter already exists for this sender, that previous transaction will be returned and a new one will not be created. Max length 100 characters
   * @member {String} idem
   */
  exports.prototype['idem'] = undefined;




  return exports;
}));
