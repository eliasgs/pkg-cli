#!/usr/bin/env node

var pkg = require('../index');

console.log(pkg.get(process.argv[2]));
