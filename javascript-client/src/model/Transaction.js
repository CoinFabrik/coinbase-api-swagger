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
    root.CoinbaseApi.Transaction = factory(root.CoinbaseApi.ApiClient, root.CoinbaseApi.MoneyHash);
  }
}(this, function(ApiClient, MoneyHash) {
  'use strict';

  /**
   * The Transaction model module.
   * @module model/Transaction
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Transaction</code>.
   * @alias module:model/Transaction
   * @class
   */
  var exports = function() {


















  };

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transaction} obj Optional instance to populate.
   * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = MoneyHash.constructFromObject(data['amount']);
      }
      if (data.hasOwnProperty('native_amount')) {
        obj['native_amount'] = MoneyHash.constructFromObject(data['native_amount']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('instant_exchange')) {
        obj['instant_exchange'] = ApiClient.convertToType(data['instant_exchange'], 'Boolean');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
      }
      if (data.hasOwnProperty('resource_path')) {
        obj['resource_path'] = ApiClient.convertToType(data['resource_path'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], Object);
      }
      if (data.hasOwnProperty('network')) {
        obj['network'] = ApiClient.convertToType(data['network'], Object);
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], Object);
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], Object);
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], Object);
      }
      if (data.hasOwnProperty('application')) {
        obj['application'] = ApiClient.convertToType(data['application'], Object);
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
   * Transaction type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;

  /**
   * Status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {module:model/MoneyHash} amount
   */
  exports.prototype['amount'] = undefined;

  /**
   * @member {module:model/MoneyHash} native_amount
   */
  exports.prototype['native_amount'] = undefined;

  /**
   * User defined description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Indicator if the transaction was instant exchanged (received into a bitcoin address for a fiat account)
   * @member {Boolean} instant_exchange
   */
  exports.prototype['instant_exchange'] = undefined;

  /**
   * Timestamp indicating when was the address was created.
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;

  /**
   * Timestamp indicating when was the address last updated.
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;

  /**
   * This value is always 'address'.
   * @member {String} resource
   */
  exports.prototype['resource'] = undefined;

  /**
   * @member {String} resource_path
   */
  exports.prototype['resource_path'] = undefined;

  /**
   * Detailed information about the transaction
   * @member {Object} details
   */
  exports.prototype['details'] = undefined;

  /**
   * Information about bitcoin network including network transaction hash if transaction was on-blockchain. Only available for certain types of transactions
   * @member {Object} network
   */
  exports.prototype['network'] = undefined;

  /**
   * The receiving party of a debit transaction. Usually another resource but can also be another type like email. Only available for certain types of transactions
   * @member {Object} to
   */
  exports.prototype['to'] = undefined;

  /**
   * The originating party of a credit transaction. Usually another resource but can also be another type like bitcoin network. Only available for certain types of transactions
   * @member {Object} from
   */
  exports.prototype['from'] = undefined;

  /**
   * Associated bitcoin address for received payment
   * @member {Object} address
   */
  exports.prototype['address'] = undefined;

  /**
   * Associated OAuth2 application
   * @member {Object} application
   */
  exports.prototype['application'] = undefined;




  return exports;
}));
