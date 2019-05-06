import _module from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _module.Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  (function (global, factory) {
    // eslint-disable-next-line no-unused-expressions
    typeof exports === 'object' && true ? exports = factory(_nodeRequire('react')) : typeof define === 'function' && define.amd // eslint-disable-line no-undef
    ? define(['react'], factory) // eslint-disable-line no-undef
    : global.SchedulerTracing = factory(global);
  })(exports, function (global) {
    function unstable_clear() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.SchedulerTracing.unstable_clear.apply(this, arguments);
    }

    function unstable_getCurrent() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.SchedulerTracing.unstable_getCurrent.apply(this, arguments);
    }

    function unstable_getThreadID() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.SchedulerTracing.unstable_getThreadID.apply(this, arguments);
    }

    function unstable_subscribe() {
      // eslint-disable-next-line max-len
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.SchedulerTracing.unstable_subscribe.apply(this, arguments);
    }

    function unstable_trace() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.SchedulerTracing.unstable_trace.apply(this, arguments);
    }

    function unstable_unsubscribe() {
      // eslint-disable-next-line max-len
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.SchedulerTracing.unstable_unsubscribe.apply(this, arguments);
    }

    function unstable_wrap() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.SchedulerTracing.unstable_wrap.apply(this, arguments);
    }

    return Object.freeze({
      unstable_clear: unstable_clear,
      unstable_getCurrent: unstable_getCurrent,
      unstable_getThreadID: unstable_getThreadID,
      unstable_subscribe: unstable_subscribe,
      unstable_trace: unstable_trace,
      unstable_unsubscribe: unstable_unsubscribe,
      unstable_wrap: unstable_wrap
    });
  });

  return exports;
}