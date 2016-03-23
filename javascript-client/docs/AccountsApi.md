# CoinbaseApi.AccountsApi

All URIs are relative to *https://api.sandbox.coinbase.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsAccountIdAddressesAddressIdGet**](AccountsApi.md#accountsAccountIdAddressesAddressIdGet) | **GET** /accounts/{account_id}/addresses/{address_id} | Show an address
[**accountsAccountIdAddressesGet**](AccountsApi.md#accountsAccountIdAddressesGet) | **GET** /accounts/{account_id}/addresses | List addresses
[**accountsAccountIdDelete**](AccountsApi.md#accountsAccountIdDelete) | **DELETE** /accounts/{account_id} | Delete account
[**accountsAccountIdGet**](AccountsApi.md#accountsAccountIdGet) | **GET** /accounts/{account_id} | Show an account
[**accountsAccountIdPrimaryGet**](AccountsApi.md#accountsAccountIdPrimaryGet) | **GET** /accounts/{account_id}/primary | Set account as primary
[**accountsAccountIdPut**](AccountsApi.md#accountsAccountIdPut) | **PUT** /accounts/{account_id} | Update account
[**accountsGet**](AccountsApi.md#accountsGet) | **GET** /accounts | List accounts
[**accountsPost**](AccountsApi.md#accountsPost) | **POST** /accounts | Create account


<a name="accountsAccountIdAddressesAddressIdGet"></a>
# **accountsAccountIdAddressesAddressIdGet**
> InlineResponse2002 accountsAccountIdAddressesAddressIdGet

Show an address

Show an individual address for an account.\nRegular bitcoin address can be used in place of address_id but the address has to be associated to the correct account.\n  \n*Important* Addresses should be considered one time use only.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AccountsApi()

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

var apiInstance = new CoinbaseApi.AccountsApi()

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

<a name="accountsAccountIdDelete"></a>
# **accountsAccountIdDelete**
> accountsAccountIdDelete

Delete account

Removes user’s account. In order to remove an account it can’t be\n\n- Primary account\n- Account with non-zero balance\n- Fiat account\n- Vault with a pending withdrawal

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AccountsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.accountsAccountIdDelete(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdGet"></a>
# **accountsAccountIdGet**
> InlineResponse201 accountsAccountIdGet

Show an account

Show current user’s account. To access user’s primary account, primary keyword can be used instead of the account id in the URL.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AccountsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsAccountIdGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdPrimaryGet"></a>
# **accountsAccountIdPrimaryGet**
> InlineResponse201 accountsAccountIdPrimaryGet

Set account as primary

Promote an account as primary account.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AccountsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsAccountIdPrimaryGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsAccountIdPut"></a>
# **accountsAccountIdPut**
> InlineResponse201 accountsAccountIdPut(opts)

Update account

Modifies user’s account name.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AccountsApi()

var opts = { 
  'accountProperties': new CoinbaseApi.AccountProperties() // {AccountProperties} Properties to update
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsAccountIdPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountProperties** | [**AccountProperties**](AccountProperties.md)| Properties to update | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsGet"></a>
# **accountsGet**
> InlineResponse200 accountsGet

List accounts

Lists current user’s accounts to which the authentication method has access to.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AccountsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountsPost"></a>
# **accountsPost**
> InlineResponse201 accountsPost

Create account

Creates a new account for user.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.AccountsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountsPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

