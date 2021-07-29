#!/usr/bin/env node

import * as pkg from '../index';

function main() {
  const result = pkg.get(process.argv[2]);
  if (result!=='undefined'){
  console.log(pkg.get(process.argv[2]));
  process.exit(0)
  }

  console.error(`${ (process.argv[2])} returned ${pkg.get(process.argv[2])}}`);
  process.exit(1)
}
main();
