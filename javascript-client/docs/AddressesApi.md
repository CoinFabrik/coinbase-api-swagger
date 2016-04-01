# CoinbaseApi.AddressesApi

All URIs are relative to *https://api.sandbox.coinbase.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdAddressesAddressIdGet**](AddressesApi.md#accountsAccountIdAddressesAddressIdGet) | **GET** /accounts/{account_id}/addresses/{address_id} | Show an address
[**accountsAccountIdAddressesAddressIdTransactionsGet**](AddressesApi.md#accountsAccountIdAddressesAddressIdTransactionsGet) | **GET** /accounts/{account_id}/addresses/{address_id}/transactions | List address’s transactions
[**accountsAccountIdAddressesGet**](AddressesApi.md#accountsAccountIdAddressesGet) | **GET** /accounts/{account_id}/addresses | List addresses
[**accountsAccountIdAddressesPost**](AddressesApi.md#accountsAccountIdAddressesPost) | **POST** /accounts/{account_id}/addresses | Create address


<a name="accountsAccountIdAddressesAddressIdGet"></a>
# **accountsAccountIdAddressesAddressIdGet**
> InlineResponse2011 accountsAccountIdAddressesAddressIdGet

Show an address

Show an individual address for an account.\nRegular bitcoin address can be used in place of address_id but the address has to be associated to the correct account.\n  \n*Important* Addresses should be considered one time use only.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AddressesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsAccountIdAddressesAddressIdGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdAddressesAddressIdTransactionsGet"></a>
# **accountsAccountIdAddressesAddressIdTransactionsGet**
> InlineResponse2002 accountsAccountIdAddressesAddressIdTransactionsGet

List address’s transactions

list transactions that have been sent to a specific address. Regular bitcoin address can be used in place of address_id but the address has to be associated to the correct account.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AddressesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsAccountIdAddressesAddressIdTransactionsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdAddressesGet"></a>
# **accountsAccountIdAddressesGet**
> InlineResponse2001 accountsAccountIdAddressesGet

List addresses

Lists addresses for an account.\n\n*Important*: Addresses should be considered one time use only.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AddressesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsAccountIdAddressesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdAddressesPost"></a>
# **accountsAccountIdAddressesPost**
> InlineResponse2011 accountsAccountIdAddressesPost(opts)

Create address

Creates a new address for an account. As all the arguments are optinal, it’s possible just to do a empty POST which will create a new address. This is handy if you need to create new receive addresses for an account on-demand.\n\n\nAddresses can be created for all account types. With fiat accounts, funds will be received with Instant Exchange.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AddressesApi()

var opts = { 
  'accountProperties': new CoinbaseApi.AccountProperties2() // {AccountProperties2} Properties to update
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsAccountIdAddressesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountProperties** | [**AccountProperties2**](AccountProperties2.md)| Properties to update | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

