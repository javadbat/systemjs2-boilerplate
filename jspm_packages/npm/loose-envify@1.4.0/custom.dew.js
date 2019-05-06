import { dew as _looseEnvifyDewDew } from "./loose-envify.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _looseEnvifyDewDew();
  return exports;
}