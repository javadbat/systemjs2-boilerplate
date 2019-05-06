import { dew as _schedulerTracingProductionMinDewDew } from "./cjs/scheduler-tracing.production.min.dew.js";
import { dew as _schedulerTracingDevelopmentDewDew } from "./cjs/scheduler-tracing.development.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  if (process.env.NODE_ENV === 'production') {
    exports = _schedulerTracingProductionMinDewDew();
  } else {
    exports = _schedulerTracingDevelopmentDewDew();
  }

  return exports;
}