#!/usr/bin/env node

var pkg = require('../index');
pkg.match(process.argv.slice(2));

console.log(pkg.fields.join(' '));
