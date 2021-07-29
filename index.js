'use strict';
exports.__esModule = true;
exports.get = void 0;
var fs_1 = require('fs');
var pkg_path = process.env.PWD + '/package.json';
function get(arg) {
  // Match all fields and array indexes of arg.
  var props = arg
    .split(/(?:(\w+)\.)|(?:(\w+)\[(\w+)\]\.?)|(?:(\w+)$)/g)
    .filter(function (el) {
      return !!el;
    }); // remove empty elements
  var tmp = JSON.parse(fs_1.readFileSync(pkg_path, { encoding: 'utf8' }));
  props.forEach(function (prop) {
    tmp = tmp && tmp[prop];
  });
  return tmp;
}
exports.get = get;
