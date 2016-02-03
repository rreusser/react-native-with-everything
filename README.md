# Helpfinder

## Installation

Requires npm v3. If you don't want to conflict with an existing npm v2 installation, try [npm3](https://www.npmjs.com/package/npm3). [linklocal](https://www.npmjs.com/package/linklocal) is used to avoid crazy relative paths. You just have to run it before `npm install` and it will create a symbolic link to `app/` in `node_modules`.

$ npm install -g linklocal
$ linklocal
$ npm install
