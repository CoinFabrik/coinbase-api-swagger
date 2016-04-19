var stt = require('swagger-test-templates'),
  fs = require('fs'),
  deref = require('json-schema-deref');


var config = {
  assertionFormat: 'should',
  testModule: 'supertest',
  pathName: [],//all paths
  maxLen: 80
};
//Fernando's User ID (sandbox) : "891ae771-ce5a-5014-801b-5461b5481e80"


deref(require('./swagger.json'), function(err, fullSchema) {
  console.dir(fullSchema); // has the full expanded $refs

  // Generates an array of JavaScript test files following specified configuration
  var files = stt.testGen(fullSchema, config);
  console.log(files);
  files.forEach(file => {
    fs.writeFileSync('./built-tests/' + file.name, file.test);
  });
});

