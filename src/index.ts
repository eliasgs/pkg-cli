import { readFileSync } from 'fs';
const defaultPath = () => process.env.PWD + '/package.json';
function get(
  arg: string,
  pkg_path: string = defaultPath(),
  resilient: boolean = true
): string {
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
      if (!resilient) process.exit(3);
      return 'ERROR: ENOENT';
    }
    if (error && typeof error.message === 'string') {
      3;
      console.error(error.message);
      if (!resilient) process.exit(5);
      return 'ERROR';
    }
    console.error('ERROR: operation failed for an unknow reason');
    if (!resilient) process.exit(7);
    return 'FATAL: UNKNOW ERROR';
  }
}
export const pkg = { get, path: defaultPath };
