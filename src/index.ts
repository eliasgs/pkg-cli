import { readFileSync } from 'fs';
const pkg_path = process.env.PWD + '/package.json';
function get<T = any>(arg: string) {
  // Match all fields and array indexes of arg.
  const props = arg
    .split(/(?:(\w+)\.)|(?:(\w+)\[(\w+)\]\.?)|(?:(\w+)$)/g)
    .filter(el => !!el); // remove empty elements
  let tmp = JSON.parse(readFileSync(pkg_path, { encoding: 'utf8' }));
  props.forEach(prop => {
    tmp = tmp && tmp[prop];
  });
  return tmp as T;
}

export { get };
