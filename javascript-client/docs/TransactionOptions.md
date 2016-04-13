# CoinbaseApi.TransactionOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type should be \\\&quot;send\\\&quot; for sending money, or \\\&quot;request\\\&quot; for requesting money. | [optional] 
**to** | **String** | A bitcoin address (send only) or an email of the recipient (send or request) | [optional] 
**amount** | **String** | Amount to be sent/requested. | [optional] 
**currency** | **String** | Currency for the amount | [optional] 
**description** | **String** | Notes to be included in the email that the recipient receives | [optional] 
**skipNotifications** | **Boolean** | (Send only) Don\u2019t send notification emails for small amounts (e.g. tips) | [optional] 
**fee** | **String** | (Send only) Transaction fee in BTC if you would like to pay it. Coinbase pays transaction fees on payments greater than or equal to 0.0001 BTC. But for smaller amounts you may want to add your own amount. Fees can be added as a string, such as 0.0005 | [optional] 
**idem** | **String** | (Send only) A token to ensure idempotence. If a previous transaction with the same idem parameter already exists for this sender, that previous transaction will be returned and a new one will not be created. Max length 100 characters | [optional] 


