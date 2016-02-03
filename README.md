# Helpfinder

## At the moment just an empty shell of an app using

- [react-native](facebook.github.io/react-native)
- [redux](https://github.com/rackt/redux)
- [immutable.js](https://facebook.github.io/immutable-js/)
- [react-web](https://github.com/taobaofed/react-web) - works, except the haste resolver module fails resolve `*.web.js`

## Installation

Requires npm v3. If you don't want to conflict with an existing npm v2 installation, try [npm3](https://www.npmjs.com/package/npm3). [linklocal](https://www.npmjs.com/package/linklocal) is used to avoid crazy relative paths. You just have to run it before `npm install` and it will create a symbolic link to `app/` in `node_modules`.

```
$ npm install -g linklocal
$ linklocal
$ npm install
```
