# CoinbaseApi.TransactionsApi

All URIs are relative to *https://api.sandbox.coinbase.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdTransactionsGet**](TransactionsApi.md#accountsAccountIdTransactionsGet) | **GET** /accounts/{account_id}/transactions | List transactions
[**accountsAccountIdTransactionsPost**](TransactionsApi.md#accountsAccountIdTransactionsPost) | **POST** /accounts/{account_id}/transactions | Send or request money
[**accountsAccountIdTransactionsTransactionIdCompletePost**](TransactionsApi.md#accountsAccountIdTransactionsTransactionIdCompletePost) | **POST** /accounts/{account_id}/transactions/{transaction_id}/complete | Complete request money
[**accountsAccountIdTransactionsTransactionIdDelete**](TransactionsApi.md#accountsAccountIdTransactionsTransactionIdDelete) | **DELETE** /accounts/{account_id}/transactions/{transaction_id} | Cancel request money
[**accountsAccountIdTransactionsTransactionIdGet**](TransactionsApi.md#accountsAccountIdTransactionsTransactionIdGet) | **GET** /accounts/{account_id}/transactions/{transaction_id} | Show a transaction
[**accountsAccountIdTransactionsTransactionIdResendPost**](TransactionsApi.md#accountsAccountIdTransactionsTransactionIdResendPost) | **POST** /accounts/{account_id}/transactions/{transaction_id}/resend | Re-send request money


<a name="accountsAccountIdTransactionsGet"></a>
# **accountsAccountIdTransactionsGet**
> InlineResponse2002 accountsAccountIdTransactionsGet(accountId)

List transactions

Lists account\u2019s transactions. See Transaction resource for more information.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.TransactionsApi()

var accountId = "accountId_example"; // {String} The account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsAccountIdTransactionsGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The account id | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdTransactionsPost"></a>
# **accountsAccountIdTransactionsPost**
> accountsAccountIdTransactionsPost(accountId, transactionOptions)

Send or request money

Type&#x3D;send\n&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;\n\nSend funds to a bitcoin address or email address. No transaction fees are required for off blockchain transactions, and Coinbase waives fees for on-blockchain transactions greater than 0.0001 BTC, up to a threshold of 25 per day. Read more about free transactions.\n\nWhen used with OAuth2 authentication, this endpoint requires two factor authentication unless used with wallet:transactions:send:bypass-2fa scope.\n\nIf the user is able to buy bitcoin, they can send funds from their fiat account using instant exchange feature. Buy fees will be included in the created transaction and the recipient will receive the user defined amount.\n\nTo create a multisig transaction, visit Multisig documentation.\n\nType&#x3D;request\n&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;\n\nRequests money from an email address.\n

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.TransactionsApi()

var accountId = "accountId_example"; // {String} The account id

var transactionOptions = new CoinbaseApi.TransactionOptions(); // {TransactionOptions} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.accountsAccountIdTransactionsPost(accountId, transactionOptions, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The account id | 
 **transactionOptions** | [**TransactionOptions**](TransactionOptions.md)|  | 

### Return type

null (empty response body)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdTransactionsTransactionIdCompletePost"></a>
# **accountsAccountIdTransactionsTransactionIdCompletePost**
> accountsAccountIdTransactionsTransactionIdCompletePost(accountId, transactionId)

Complete request money

Lets the recipient of a money request complete the request by sending money to the user who requested the money. This can only be completed by the user to whom the request was made, not the user who sent the request.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.TransactionsApi()

var accountId = "accountId_example"; // {String} The account id

var transactionId = "transactionId_example"; // {String} The transaction id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.accountsAccountIdTransactionsTransactionIdCompletePost(accountId, transactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The account id | 
 **transactionId** | **String**| The transaction id | 

### Return type

null (empty response body)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdTransactionsTransactionIdDelete"></a>
# **accountsAccountIdTransactionsTransactionIdDelete**
> accountsAccountIdTransactionsTransactionIdDelete(accountId, transactionId)

Cancel request money

Lets a user cancel a money request. Money requests can be canceled by the sender or the recipient.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.TransactionsApi()

var accountId = "accountId_example"; // {String} The account id

var transactionId = "transactionId_example"; // {String} The transaction id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.accountsAccountIdTransactionsTransactionIdDelete(accountId, transactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The account id | 
 **transactionId** | **String**| The transaction id | 

### Return type

null (empty response body)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdTransactionsTransactionIdGet"></a>
# **accountsAccountIdTransactionsTransactionIdGet**
> InlineResponse2003 accountsAccountIdTransactionsTransactionIdGet(accountId, transactionId)

Show a transaction

Show an individual transaction for an account. See Transaction resource for more information.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.TransactionsApi()

var accountId = "accountId_example"; // {String} The account id

var transactionId = "transactionId_example"; // {String} The transaction id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsAccountIdTransactionsTransactionIdGet(accountId, transactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The account id | 
 **transactionId** | **String**| The transaction id | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdTransactionsTransactionIdResendPost"></a>
# **accountsAccountIdTransactionsTransactionIdResendPost**
> accountsAccountIdTransactionsTransactionIdResendPost(accountId, transactionId)

Re-send request money

Lets the user resend a money request. This will notify recipient with a new email.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.TransactionsApi()

var accountId = "accountId_example"; // {String} The account id

var transactionId = "transactionId_example"; // {String} The transaction id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.accountsAccountIdTransactionsTransactionIdResendPost(accountId, transactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The account id | 
 **transactionId** | **String**| The transaction id | 

### Return type

null (empty response body)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

