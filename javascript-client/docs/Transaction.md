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
**network** | **Object** | Information about bitcoin network including network transaction hash if transaction was on-blockchain. Only available for certain types of transactions | [optional] 
**to** | **Object** | The receiving party of a debit transaction. Usually another resource but can also be another type like email. Only available for certain types of transactions | [optional] 
**from** | **Object** | The originating party of a credit transaction. Usually another resource but can also be another type like bitcoin network. Only available for certain types of transactions | [optional] 
**address** | **Object** | Associated bitcoin address for received payment | [optional] 
**application** | **Object** | Associated OAuth2 application | [optional] 


