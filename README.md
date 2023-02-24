# Coinbase API v2 Swagger

This is a [Swagger](http://swagger.io/) file for the [Coinbase API](https://developers.coinbase.com/api/v2)

# Generating a Client Library

To generate a client library, go to http://editor.swagger.io/ . Go to "File" > "Import URL" and copy this url: https://github.com/CoinFabrik/coinbase-api-swagger/raw/master/swagger.json

Then go to "Generate Client" and choose a client for download. The following languages/frameworks are supported:

- Akka Scala
- Android
- Async Scala
- Clojure
- C#
- C# .NET 2.0
- Dart
- Dynamic HTML
- Flash
- Go
- HTML
- Java
- Javascript
- Javascript Closure Angular
- Jmeter
- Objective-C
- Perl
- PHP
- Python
- Qt 5 C++
- Ruby
- Scala
- Swift
- Tizen
- Typescript Angular
- Typescript Node

# Development


To run the tests, get an account in https://sandbox.coinbase.com Then go to Settings > API Access, and create an OAuth 2 application.
On the application page, create a developer access token (at the bottom). Choose all the permissions by clicking on "API v2" and click on "Create Access Token".

Once you have the access token, create an .env file in the root directory with these contents:

    COINBASE_ACCESS_CODE="your access token here"
    
Install node modules:

**npm install**

And run the tests:

**npm test**



