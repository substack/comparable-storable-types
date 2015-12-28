var type = require('../')
var f = type('float32')
var x = f.read(Buffer([ 0x40, 0x49, 0x0f, 0xdb ]), 0)
console.log(x)
