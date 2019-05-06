import { dew as _indexDewDew } from "./index.dew.js";
import _fs from "fs";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  var looseEnvify = _indexDewDew();

  var fs = _fs;

  if (process.argv[2]) {
    fs.createReadStream(process.argv[2], {
      encoding: 'utf8'
    }).pipe(looseEnvify(process.argv[2])).pipe(process.stdout);
  } else {
    process.stdin.resume();
    process.stdin.pipe(looseEnvify(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url).pathname)).pipe(process.stdout);
  }

  return exports;
}