var test = require('tape')
var type = require('../')

test('buf[3] cmp', function (t) {
  var B = type('buffer[3]')
  var bufs = [ 'zzz', 'qrs', '123', '100' ].map(Buffer)
  bufs.sort(function (a, b) { return B.cmp.lt(a, b) ? -1 : 1 })
  t.deepEqual(bufs, [
    Buffer('100'), Buffer('123'), Buffer('qrs'), Buffer('zzz')
  ])
  t.end()
})
