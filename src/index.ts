import { readFileSync } from 'fs';
const pkg_path = process.env.PWD + '/package.json';
function get(arg: string): string {
  // Match all fields and array indexes of arg.
  const props = arg
    .split(/(?:(\w+)\.)|(?:(\w+)\[(\w+)\]\.?)|(?:(\w+)$)/g)
    .filter(el => !!el); // remove empty elements
  try {
    let tmp = JSON.parse(readFileSync(pkg_path, { encoding: 'utf8' }));
    props.forEach(prop => {
      tmp = tmp && tmp[prop];
    });
    return String(tmp);
  } catch (error: any) {
    return error && typeof error.message === 'string'
      ? String(error.message)
      : 'ERROR: operation failed for an unknow reason';
  }
}

export { get };
