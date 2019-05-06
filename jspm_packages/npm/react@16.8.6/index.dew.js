import { dew as _reactProductionMinDewDew } from "./cjs/react.production.min.dew.js";
import { dew as _reactDevelopmentDewDew } from "./cjs/react.development.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  if (process.env.NODE_ENV === 'production') {
    exports = _reactProductionMinDewDew();
  } else {
    exports = _reactDevelopmentDewDew();
  }

  return exports;
}