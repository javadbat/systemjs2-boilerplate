import { dew as _schedulerProductionMinDewDew } from "./cjs/scheduler.production.min.dew.js";
import { dew as _schedulerDevelopmentDewDew } from "./cjs/scheduler.development.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  if (process.env.NODE_ENV === 'production') {
    exports = _schedulerProductionMinDewDew();
  } else {
    exports = _schedulerDevelopmentDewDew();
  }

  return exports;
}