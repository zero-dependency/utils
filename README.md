# @zero-dependency/utils

[![npm version](https://img.shields.io/npm/v/@zero-dependency/utils)](https://npm.im/@zero-dependency/utils)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@zero-dependency/utils)](https://bundlephobia.com/package/@zero-dependency/utils@latest)
![npm license](https://img.shields.io/npm/l/@zero-dependency/utils)

## Installation

```sh
npm install @zero-dependency/utils
```

```sh
yarn add @zero-dependency/utils
```

```sh
pnpm add @zero-dependency/utils
```

## Usage

```ts
import {
  hexToRgb,
  rgbToHex,
  isHexColor,
  debounce,
  throttle,
  toNumber,
  addZero,
  entries,
  pick,
  omit,
  pluralize,
  randomNum,
  randomToken,
  generateChars,
  capitalize
  wait,
} from '@zero-dependency/utils'

// hex
console.log(hexToRgb('#000')) // { r: 0, g: 0, b: 0 }
console.log(rgbToHex({ r: 0, g: 0, b: 0 })) // #000000
console.log(isHexColor('#000')) // RegExpExecArray
console.log(isHexColor('wrong')) // null

// debounce
const debounced = debounce((msg) => console.log(msg), 1000)

// throttle
const throttled = throttle((msg) => console.log(msg), 1000)

// number
console.log(toNumber('1')) // 1
console.log(addZero(1)) // '01'
console.log(randomNum(1, 10))

// object
console.log(entries({ a: 1, b: 2 })) // [['a', 1], ['b', 2]]
console.log(pick({ a: 1, b: 2 }, ['a'])) // { a: 1 }
console.log(omit({ a: 1, b: 2 }, ['a'])) // { b: 2 }

// pluralize
const tasksPluralize = pluralize({
  one: 'задание',
  two: 'задания',
  few: 'заданий',
  prefix: true
})

console.log(tasksPluralize(1)) // '1 задание'
console.log(tasksPluralize(3)) // '3 задания'
console.log(tasksPluralize(5)) // '5 заданий'
console.log(tasksPluralize(999)) // '999 заданий'

// string
console.log(randomToken()) // 'vpxi4hpzmy'
console.log(generateChars('a', 'd')) // ['a', 'b', 'c', 'd']
console.log(capitalize('hello')) // 'Hello'

// wait
await wait(1000)
console.log('resolve after 1s')
```
