var test = require('tape')
var type = require('../')

test('write uint16', function (t) {
  var f = type('uint16')
  var buf = Buffer(2)
  f.write(buf, 5555, 0)
  t.deepEqual(buf, Buffer('15b3', 'hex'))
  t.end()
})
