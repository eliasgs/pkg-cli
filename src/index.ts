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
    if (error.code === 'ENOENT') {
      console.error(`ENOENT: no such file or directory PATH:${error.path}`);
      process.exit(3);
    }
    if (error && typeof error.message === 'string') {
      3;
      console.error(error.message);
      process.exit(5);
    }
    console.error('ERROR: operation failed for an unknow reason');
    process.exit(7);
  }
}

export { get };
