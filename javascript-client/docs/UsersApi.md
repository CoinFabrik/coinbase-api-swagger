# CoinbaseApi.UsersApi

All URIs are relative to *https://api.sandbox.coinbase.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userAuthGet**](UsersApi.md#userAuthGet) | **GET** /user/auth | Show authorization information
[**userGet**](UsersApi.md#userGet) | **GET** /user | Show current user
[**userPut**](UsersApi.md#userPut) | **PUT** /user | Update current user
[**usersUserIdGet**](UsersApi.md#usersUserIdGet) | **GET** /users/{user_id} | Show a user


<a name="userAuthGet"></a>
# **userAuthGet**
> InlineResponse2005 userAuthGet

Show authorization information

Get current user\u2019s authorization information including granted scopes and send limits when using OAuth2 authentication.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.UsersApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.userAuthGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userGet"></a>
# **userGet**
> InlineResponse2004 userGet

Show current user

Get current user\u2019s public information. To get user\u2019s email or private information, use permissions wallet:user:email and wallet:user:read.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.UsersApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.userGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userPut"></a>
# **userPut**
> InlineResponse2004 userPut(opts)

Update current user

Modify current user and their preferences.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.UsersApi()

var opts = { 
  'body': new CoinbaseApi.Body() // {Body} Properties to update
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.userPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| Properties to update | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdGet"></a>
# **usersUserIdGet**
> InlineResponse2004 usersUserIdGet(userId)

Show a user

Get any user\u2019s public information with their ID.

### Example
```javascript
var CoinbaseApi = require('coinbase-api');
var defaultClient = CoinbaseApi.ApiClient.default;

// Configure OAuth2 access token for authorization: coinbaseAccessCode
var coinbaseAccessCode = defaultClient.authentications['coinbaseAccessCode'];
coinbaseAccessCode.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new CoinbaseApi.UsersApi()

var userId = "userId_example"; // {String} The user id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.usersUserIdGet(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The user id | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[coinbaseAccessCode](../README.md#coinbaseAccessCode)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

