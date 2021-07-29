#!/usr/bin/env node

import { pkg } from '../index';

function main() {
  const result = pkg.get(process.argv[2],pkg.path(),false);
  if (result!=='undefined'){
  console.log(result);
  process.exit(0)
  }

  console.error(`${ (process.argv[2])} returned ${result}}`);
  process.exit(1)
}
main();
