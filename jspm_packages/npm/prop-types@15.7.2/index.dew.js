import { dew as _indexDewDew } from "react-is/index.dew.js";
import { dew as _factoryWithTypeCheckersDewDew } from "./factoryWithTypeCheckers.dew.js";
import { dew as _factoryWithThrowingShimsDewDew } from "./factoryWithThrowingShims.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = _indexDewDew(); // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod


    var throwOnDirectAccess = true;
    exports = _factoryWithTypeCheckersDewDew()(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    exports = _factoryWithThrowingShimsDewDew()();
  }

  return exports;
}