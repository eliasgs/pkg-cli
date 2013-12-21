var pkg = require(process.env.PWD + '/package.json');

function get(arg) {
  // Match all fields and array indexes of arg.
  var props = arg.split(/(?:(\w+)\.)|(?:(\w+)\[(\w+)\]\.?)|(?:(\w+)$)/g)
                 .filter(function (el) {return el}); // remove empty elements
  var tmp = pkg;
  props.forEach(function (prop) {
    tmp = tmp && tmp[prop];  
  });
  return tmp;
}

exports.get = get;
