var stt = require('swagger-test-templates'),
  fs = require('fs'),
  deref = require('json-schema-deref');

function replaceParamsPlaceholders(file) {
  var index = file.indexOf(' PARAM GOES HERE}');
  while(index !== -1) {
    var paramName = [], i;
    for (i = index - 1; file[i] !== '{'; i--) {
      paramName.unshift(file[i]);
    }
    paramName = paramName.join('');
    file = file.slice(0, i) +
      '\' + require(\'../param-pool\').get(\'' + paramName + '\') + \'' +
      file.slice(index + 17);
    index = file.indexOf(' PARAM GOES HERE}');
  }
  return file;
}

function generate() {
  deref(require('./swagger.json'), function(err, fullSchema) {
    // Generates an array of JavaScript test files following specified configuration
    var files = stt.testGen(fullSchema, {
      assertionFormat: 'should',
      testModule: 'supertest',
      pathName: [],//all paths
      maxLen: 80
    });
    files.forEach(file => {
      file.test = replaceParamsPlaceholders(file.test);
      fs.writeFileSync('./built-tests/' + file.name, file.test);
    });
  });
}


exports.replaceParamsPlaceholders = replaceParamsPlaceholders;
exports.generate = generate;