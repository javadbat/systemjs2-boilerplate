import { dew as _looseEnvifyDewDew } from "./loose-envify.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  exports = _looseEnvifyDewDew()(process.env);
  return exports;
}