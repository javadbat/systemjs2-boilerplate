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
    : global.Scheduler = factory(global);
  })(exports, function (global) {
    function unstable_now() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_now.apply(this, arguments);
    }

    function unstable_scheduleCallback() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_scheduleCallback.apply(this, arguments);
    }

    function unstable_cancelCallback() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_cancelCallback.apply(this, arguments);
    }

    function unstable_shouldYield() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_shouldYield.apply(this, arguments);
    }

    function unstable_runWithPriority() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_runWithPriority.apply(this, arguments);
    }

    function unstable_next() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_next.apply(this, arguments);
    }

    function unstable_wrapCallback() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_wrapCallback.apply(this, arguments);
    }

    function unstable_getCurrentPriorityLevel() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_getCurrentPriorityLevel.apply(this, arguments);
    }

    function unstable_getFirstCallbackNode() {
      return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_getFirstCallbackNode.apply(this, arguments);
    }

    function unstable_pauseExecution() {
      return undefined;
    }

    function unstable_continueExecution() {
      return undefined;
    }

    return Object.freeze({
      unstable_now: unstable_now,
      unstable_scheduleCallback: unstable_scheduleCallback,
      unstable_cancelCallback: unstable_cancelCallback,
      unstable_shouldYield: unstable_shouldYield,
      unstable_runWithPriority: unstable_runWithPriority,
      unstable_next: unstable_next,
      unstable_wrapCallback: unstable_wrapCallback,
      unstable_getCurrentPriorityLevel: unstable_getCurrentPriorityLevel,
      unstable_continueExecution: unstable_continueExecution,
      unstable_pauseExecution: unstable_pauseExecution,
      unstable_getFirstCallbackNode: unstable_getFirstCallbackNode,

      get unstable_IdlePriority() {
        return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_IdlePriority;
      },

      get unstable_ImmediatePriority() {
        return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_ImmediatePriority;
      },

      get unstable_LowPriority() {
        return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_LowPriority;
      },

      get unstable_NormalPriority() {
        return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_NormalPriority;
      },

      get unstable_UserBlockingPriority() {
        return global.React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler.unstable_UserBlockingPriority;
      }

    });
  });

  return exports;
}