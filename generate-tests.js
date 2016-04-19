var stt = require('swagger-test-templates'),
  swagger = require('./swagger.json'),
  fs = require('fs');
var config = {
  assertionFormat: 'should',
  testModule: 'supertest',
  pathName: [],//all paths
  maxLen: 80
};
//Fernando's User ID (sandbox) : "891ae771-ce5a-5014-801b-5461b5481e80"


// Generates an array of JavaScript test files following specified configuration 
var files = stt.testGen(swagger, config);
console.log(files);
files.forEach(file => {
  fs.writeFileSync('./built-tests/' + file.name, file.test);
});
