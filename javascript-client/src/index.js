(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Account', './model/AccountProperties', './model/AccountProperties1', './model/AccountProperties2', './model/Address', './model/Body', './model/InlineResponse200', './model/InlineResponse2001', './model/InlineResponse2002', './model/InlineResponse2003', './model/InlineResponse2004', './model/InlineResponse2004Data', './model/InlineResponse201', './model/InlineResponse2011', './model/MoneyHash', './model/Pagination', './model/Transaction', './model/User', './api/AccountsApi', './api/AddressesApi', './api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/AccountProperties'), require('./model/AccountProperties1'), require('./model/AccountProperties2'), require('./model/Address'), require('./model/Body'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2004Data'), require('./model/InlineResponse201'), require('./model/InlineResponse2011'), require('./model/MoneyHash'), require('./model/Pagination'), require('./model/Transaction'), require('./model/User'), require('./api/AccountsApi'), require('./api/AddressesApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, Account, AccountProperties, AccountProperties1, AccountProperties2, Address, Body, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2004Data, InlineResponse201, InlineResponse2011, MoneyHash, Pagination, Transaction, User, AccountsApi, AddressesApi, UsersApi) {
  'use strict';

  /**
   * The Coinbase v2 API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CoinbaseApi = require('./index'); // See note below*.
   * var xxxSvc = new CoinbaseApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CoinbaseApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CoinbaseApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CoinbaseApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountProperties model constructor.
     * @property {module:model/AccountProperties}
     */
    AccountProperties: AccountProperties,
    /**
     * The AccountProperties1 model constructor.
     * @property {module:model/AccountProperties1}
     */
    AccountProperties1: AccountProperties1,
    /**
     * The AccountProperties2 model constructor.
     * @property {module:model/AccountProperties2}
     */
    AccountProperties2: AccountProperties2,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2004Data model constructor.
     * @property {module:model/InlineResponse2004Data}
     */
    InlineResponse2004Data: InlineResponse2004Data,
    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201: InlineResponse201,
    /**
     * The InlineResponse2011 model constructor.
     * @property {module:model/InlineResponse2011}
     */
    InlineResponse2011: InlineResponse2011,
    /**
     * The MoneyHash model constructor.
     * @property {module:model/MoneyHash}
     */
    MoneyHash: MoneyHash,
    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction: Transaction,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AddressesApi service constructor.
     * @property {module:api/AddressesApi}
     */
    AddressesApi: AddressesApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
