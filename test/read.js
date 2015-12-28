var test = require('tape')
var type = require('../')

test('read float32', function (t) {
  var z = type('float32')
  var x = z.read(Buffer('40490fdb','hex'), 0)
  t.equal(x, 3.1415927410125732, 'pi')
  t.end()
})

test('read float64', function (t) {
  var z = type('float64')
  var x = z.read(Buffer('400921fb54442d18','hex'), 0)
  t.equal(x, Math.PI, 'pi')
  t.end()
})

test('read uint8', function (t) {
  var z = type('uint8')
  var x = z.read(Buffer('002500','hex'), 1)
  t.equal(x, 37)
  t.end()
})

test('read uint16', function (t) {
  var z = type('uint16')
  var x = z.read(Buffer('112233251f4455','hex'), 3)
  t.equal(x, 9503)
  t.end()
})

test('read uint32', function (t) {
  var z = type('uint32')
  var x = z.read(Buffer('1122502f625a376b','hex'), 2)
  t.equal(x, 1345282650)
  t.end()
})

test('read int8', function (t) {
  var z = type('int8')
  var x = z.read(Buffer('11228c55','hex'), 2)
  t.equal(x, -116)
  t.end()
})

test('read int16', function (t) {
  var z = type('int16')
  var x = z.read(Buffer('1122af5255','hex'), 2)
  t.equal(x, -20654)
  t.end()
})

test('read int32', function (t) {
  var z = type('int32')
  var x = z.read(Buffer('7b2510b3','hex'), 0)
  t.equal(x, 2066026675)
  t.end()
})

test('read buf[4]', function (t) {
  var z = type('buf[4]')
  var b = z.read(Buffer('10203040aabbccdd5060', 'hex'), 4)
  t.deepEqual(b, Buffer('aabbccdd', 'hex'))
  t.end()
})
