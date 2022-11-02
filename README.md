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

// L&t@D=C4N8\\U{g7vPZ3 Mw2cFSl!,Kju~1iz>dBfE\'-`xQ+oG|;O0e"5mY:$*HyJb?[<X)9qTs]6pI(^R/Vah#Wk}A._n%r
```

Encryption:

```js
ac.encrypt(char, secret);

// x^V)ILsRa#ILX^p^VLashL?I)h{L<^(a)<h)h#VL?XsRsa<s(qL)psh{La)XLX^L)s#aI^XLh)IR^VLs(<sXsX#(hL#hLp?[^V)L)hLX^p^V)LI?q(?L?ps/#?7
```

Decryption:

```js
ac.decrypt(char, secret);

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

## License

Distributed under the MIT License. See LICENSE for more information.
