import { dew as _schedulerTracingProfilingMinDewDew } from "./cjs/scheduler-tracing.profiling.min.dew.js";
import { dew as _schedulerTracingDevelopmentDewDew } from "./cjs/scheduler-tracing.development.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  if (process.env.NODE_ENV === 'production') {
    exports = _schedulerTracingProfilingMinDewDew();
  } else {
    exports = _schedulerTracingDevelopmentDewDew();
  }

  return exports;
}