'use strict';
exports.__esModule = true;
exports.get = void 0;
var fs_1 = require('fs');
var pkg_path_ = process.env.PWD + '/package.json';
function get(arg, pkg_path) {
  if (pkg_path === void 0) {
    pkg_path = pkg_path_;
  }
  // Match all fields and array indexes of arg.
  var props = arg
    .split(/(?:(\w+)\.)|(?:(\w+)\[(\w+)\]\.?)|(?:(\w+)$)/g)
    .filter(function (el) {
      return !!el;
    }); // remove empty elements
  try {
    var tmp_1 = JSON.parse(fs_1.readFileSync(pkg_path, { encoding: 'utf8' }));
    props.forEach(function (prop) {
      tmp_1 = tmp_1 && tmp_1[prop];
    });
    return String(tmp_1);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('ENOENT: no such file or directory PATH:' + error.path);
      process.exit(3);
    }
    if (error && typeof error.message === 'string') {
      3;
      console.error(error.message);
      process.exit(5);
    }
    console.error('ERROR: operation failed for an unknow reason');
    process.exit(7);
  }
}
exports.get = get;
