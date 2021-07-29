"use strict";
exports.__esModule = true;
exports.pkg = void 0;
var fs_1 = require("fs");
var defaultPath = function () { return process.env.PWD + '/package.json'; };
function get(arg, pkg_path, resilient) {
    if (pkg_path === void 0) { pkg_path = defaultPath(); }
    if (resilient === void 0) { resilient = true; }
    // Match all fields and array indexes of arg.
    var props = arg
        .split(/(?:(\w+)\.)|(?:(\w+)\[(\w+)\]\.?)|(?:(\w+)$)/g)
        .filter(function (el) { return !!el; }); // remove empty elements
    try {
        var tmp_1 = JSON.parse(fs_1.readFileSync(pkg_path, { encoding: 'utf8' }));
        props.forEach(function (prop) {
            tmp_1 = tmp_1 && tmp_1[prop];
        });
        return String(tmp_1);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            console.error("ENOENT: no such file or directory PATH:" + error.path);
            if (!resilient)
                process.exit(3);
            return 'ERROR: ENOENT';
        }
        if (error && typeof error.message === 'string') {
            3;
            console.error(error.message);
            if (!resilient)
                process.exit(5);
            return 'ERROR';
        }
        console.error('ERROR: operation failed for an unknow reason');
        if (!resilient)
            process.exit(7);
        return 'FATAL: UNKNOW ERROR';
    }
}
exports.pkg = { get: get, path: defaultPath };
