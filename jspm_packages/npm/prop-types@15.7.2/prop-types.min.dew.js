import _module from "module";
var exports = {},
    _dewExec = false;

var _global = typeof self !== "undefined" ? self : global;

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

  !function (f) {
    if ("object" == typeof exports && true) exports = f();else if ("function" == typeof define && define.amd) define([], f);else {
      var g;
      g = "undefined" != typeof window ? window : "undefined" != typeof _global ? _global : "undefined" != typeof self ? self : this || _global, g.PropTypes = f();
    }
  }(function () {
    return function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = _nodeRequire;
            if (!u && a) return a(o, !0);
            if (i) return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }

          var l = n[o] = {
            exports: {}
          };
          t[o][0].call(l.exports, function (e) {
            var n = t[o][1][e];
            return s(n || e);
          }, l, l.exports, e, t, n, r);
        }

        return n[o].exports;
      }

      for (var i = _nodeRequire, o = 0; o < r.length; o++) s(r[o]);

      return s;
    }({
      1: [function (require, module, exports) {
        "use strict";

        function emptyFunction() {}

        function emptyFunctionWithReset() {}

        var ReactPropTypesSecret = require(3);

        emptyFunctionWithReset.resetWarningCache = emptyFunction, module.exports = function () {
          function e(e, t, n, r, o, p) {
            if (p !== ReactPropTypesSecret) {
              var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw c.name = "Invariant Violation", c;
            }
          }

          function t() {
            return e;
          }

          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction
          };
          return n.PropTypes = n, n;
        };
      }, {
        3: 3
      }],
      2: [function (require, module, exports) {
        module.exports = require(1)();
      }, {
        1: 1
      }],
      3: [function (require, module, exports) {
        "use strict";

        module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      }, {}]
    }, {}, [2])(2);
  });
  return exports;
}