import _stream from "stream";
import _util from "util";
import { dew as _replaceDewDew } from "./replace.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var stream = _stream;
  var util = _util;

  var replace = _replaceDewDew();

  var jsonExtRe = /\.json$/;

  exports = function (rootEnv) {
    rootEnv = rootEnv || process.env;
    return function (file, trOpts) {
      if (jsonExtRe.test(file)) {
        return stream.PassThrough();
      }

      var envs = trOpts ? [rootEnv, trOpts] : [rootEnv];
      return new LooseEnvify(envs);
    };
  };

  function LooseEnvify(envs) {
    stream.Transform.call(this);
    this._data = '';
    this._envs = envs;
  }

  util.inherits(LooseEnvify, stream.Transform);

  LooseEnvify.prototype._transform = function (buf, enc, cb) {
    this._data += buf;
    cb();
  };

  LooseEnvify.prototype._flush = function (cb) {
    var replaced = replace(this._data, this._envs);
    this.push(replaced);
    cb();
  };

  return exports;
}