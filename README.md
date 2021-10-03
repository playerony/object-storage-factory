# object-storage-factory

[![npm](https://img.shields.io/npm/v/object-storage-factory.svg)](https://www.npmjs.com/package/object-storage-factory)
![types](https://img.shields.io/badge/types-typescript%20%7C%20flow-blueviolet)
[![minzip](https://img.shields.io/bundlephobia/minzip/object-storage-factory.svg)](https://www.npmjs.com/package/object-storage-factory)
[![downloads per month](https://img.shields.io/npm/dm/object-storage-factory.svg)](https://www.npmjs.com/package/object-storage-factory)
[![issues](https://img.shields.io/github/issues/playerony/object-storage-factory.svg)](https://www.npmjs.com/package/object-storage-factory)
[![license](https://img.shields.io/github/license/playerony/object-storage-factory)](https://www.npmjs.com/package/object-storage-factory)

Object storage factory implemented with the same interface as the browser's local storage.

# documentation

If you want to get more information about library, just take a look at markdown documentation: **[API Documentation](https://playerony.github.io/object-storage-factory)**.

# installation

```js
yarn add object-storage-factory
npm install object-storage-factory
```

# example

```js
const { objectStorageFactory } = require('object-storage-factory');

const objectStorage = objectStorageFactory();

objectStorage.setItem('key', 'value');
objectStorage.getItem('key'); // value
objectStorage.getItem('wrong_key'); // null
```

# usage

Useful when you will not be able to use local storage or session storage due to security or other thrown error.

# license

MIT
