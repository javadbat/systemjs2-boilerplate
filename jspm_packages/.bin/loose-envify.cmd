@setlocal
@for %%X in (jspm) do @(set JSPM_PATH=%%~dp$PATH:X)
@if "%JSPM_PATH%"=="" (
  @echo jspm not found in path, make sure it is installed globally.
  @exit /B 1
)
@set NODE_OPTIONS=--experimental-modules --no-warnings --loader /%JSPM_PATH%node_modules\jspm\node_modules\@jspm\resolve\loader.mjs
@node "%~dp0\..\npm\loose-envify@1.4.0\cli.js" %*
