//These get assigned in ./initialization.js
var params = {};
exports.get = function get(key) {
  var value = params[key];
  if (value == undefined) {
    throw new Error('Parameter "' + key + '" not found in param-pool. Set it in ./test/initialization.js' +
    ' ("before" hook) like so: require(\'./param-pool\').set(\'' + key + '\', <some value>)');
  }
  return value;
};

exports.set = function set(key, value) {
  params[key] = value;
};
