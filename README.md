# asciicrypt

[![npm version](https://img.shields.io/npm/v/asciicrypt)](https://www.npmjs.com/package/asciicrypt) [![npm](https://img.shields.io/npm/l/asciicrypt)](https://github.com/coded-bear/asciicrypt/blob/main/LICENSE) [![npm](https://img.shields.io/bundlephobia/minzip/asciicrypt)](https://www.npmjs.com/package/asciicrypt)

Cipher substituting ascii code characters.

The premise was to create a simple cipher that could be decoded by oneself. Without being forced to use a package.

## Installation

```
npm install asciicrypt
```

## Usage

Generate of secret:

```js
import ac from 'asciicrypt';

ac.createSecret();
```

Encryption:

```js
ac.encrypt(char, secret);
```

Decryption:

```js
ac.decrypt(char, secret);
```

## License

Distributed under the MIT License. See LICENSE for more information.
