var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var b = 0;
  exports.__interactionsRef = null;
  exports.__subscriberRef = null;

  exports.unstable_clear = function (a) {
    return a();
  };

  exports.unstable_getCurrent = function () {
    return null;
  };

  exports.unstable_getThreadID = function () {
    return ++b;
  };

  exports.unstable_trace = function (a, d, c) {
    return c();
  };

  exports.unstable_wrap = function (a) {
    return a;
  };

  exports.unstable_subscribe = function () {};

  exports.unstable_unsubscribe = function () {};

  return exports;
}