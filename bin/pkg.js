#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var index_1 = require("../index");
function main() {
    var result = index_1.pkg.get(process.argv[2], index_1.pkg.path(), false);
    if (result !== 'undefined') {
        console.log(result);
        process.exit(0);
    }
    console.error((process.argv[2]) + " returned " + result + "}");
    process.exit(1);
}
main();
