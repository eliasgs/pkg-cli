var pkg = require(process.env.PWD + '/package.json');

function get(field) {
  return pkg[field] || '';
}

exports.get = get;
