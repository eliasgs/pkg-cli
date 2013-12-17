var pkg = require(process.env.PWD + '/package.json');

var fields = [];
function match(args) {
  args.forEach(function (arg) {
    pkg[arg] && fields.push(pkg[arg]);
  });
}

exports.match = match;
exports.fields = fields;
