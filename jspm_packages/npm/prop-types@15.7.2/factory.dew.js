import { dew as _factoryWithTypeCheckersDewDew } from "./factoryWithTypeCheckers.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  // React 15.5 references this module, and assumes PropTypes are still callable in production.
  // Therefore we re-export development-only version with all the PropTypes checks here.
  // However if one is migrating to the `prop-types` npm library, they will go through the
  // `index.js` entry point, and it will branch depending on the environment.
  var factory = _factoryWithTypeCheckersDewDew();

  exports = function (isValidElement) {
    // It is still allowed in 15.5.
    var throwOnDirectAccess = false;
    return factory(isValidElement, throwOnDirectAccess);
  };

  return exports;
}