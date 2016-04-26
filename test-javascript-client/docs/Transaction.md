# CoinbaseApi.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Resource ID | [optional] 
**type** | **String** | Transaction type | [optional] 
**status** | **String** | Status | [optional] 
**amount** | [**MoneyHash**](MoneyHash.md) |  | [optional] 
**nativeAmount** | [**MoneyHash**](MoneyHash.md) |  | [optional] 
**description** | **String** | User defined description | [optional] 
**instantExchange** | **Boolean** | Indicator if the transaction was instant exchanged (received into a bitcoin address for a fiat account) | [optional] 
**createdAt** | **String** | Timestamp indicating when was the address was created. | [optional] 
**updatedAt** | **String** | Timestamp indicating when was the address last updated. | [optional] 
**resource** | **String** | This value is always &#39;address&#39;. | [optional] 
**resourcePath** | **String** |  | [optional] 
**details** | **Object** | Detailed information about the transaction | [optional] 


