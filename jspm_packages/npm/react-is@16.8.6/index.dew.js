import { dew as _reactIsProductionMinDewDew } from "./cjs/react-is.production.min.dew.js";
import { dew as _reactIsDevelopmentDewDew } from "./cjs/react-is.development.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  if (process.env.NODE_ENV === 'production') {
    exports = _reactIsProductionMinDewDew();
  } else {
    exports = _reactIsDevelopmentDewDew();
  }

  return exports;
}