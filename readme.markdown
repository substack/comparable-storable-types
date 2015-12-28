# comparable-storable-types

read, write, and compare binary types

Use this module if you want uniform access for reading, writing, comparison,
sizes, and minimum/maximum values for a bunch of different machine types.

This module was built specifically for implementing a range of types for spatial
trees on disk.

# example

## write

``` js
var type = require('comparable-storable-types')
var f = type('uint16')
var buf = new Buffer(2)
f.write(buf, 5555, 0)
console.log(buf.toString('hex'))
```

## read

``` js
var type = require('comparable-storable-types')
var f = type('float32')
var x = f.read(Buffer([ 0x40, 0x49, 0x0f, 0xdb ]), 0)
console.log(x)
```

## cmp

``` js
var type = require('comparable-storable-types')
var B = type('buffer[3]')
var bufs = [ 'zzz', 'qrs', '123', '100' ].map(function (s) { return new Buffer(s) })
bufs.sort(function (a, b) { return B.cmp.lt(a, b) ? -1 : 1 })
console.log(bufs.map(String))
```

# api

```
var types = require('comparable-storable-types')
```

## var t = types(str)

Look up a type object `t` by a description string `str`.

Types are:

* `float`, `float32`, `f`, `f32`
* `double`, `float64`, `d`, `f64`
* `uint8`, `ui8`, `u8`
* `uint16`, `ui16`, `u16`
* `uint32`, `ui32`, `u32`
* `sint8`, `int8`, `si8`, `i8`, `s8`
* `sint16`, `int16`, `si16`, `i16`, `s16`
* `sint32`, `int32`, `si32`, `i32`, `s32`

## var value = t.read(buf, offset)

Parse the value for the type at `offset` in `buf`.

## t.write(buf, value, offset)

Write `value` into `buf` at `offset`.

## t.size

Size in bytes of the type

## t.min

Minimum value for the type

## t.max

Maximum value for the type

## t.cmp

Comparison operators:

* `t.cmp.eq(a, b)`
* `t.cmp.lt(a, b)`
* `t.cmp.lte(a, b)`
* `t.cmp.gt(a, b)`
* `t.cmp.gte(a, b)`

# install

```
npm install comparable-storable-types
```

# license

BSD
