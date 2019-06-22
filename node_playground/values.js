// Passing by value
function change(n) {
  n = 2
}

var a = 1

change(a)
console.log(a)

// Passing by reference
function change2(obj) {
  obj.prop1 = 'aaaaaaaaaa'
  obj.prop2 = 'bbbbbbbbbb'
}

var o = {
  prop1: 111111,
  prop2: 222222
}

console.log(o)
change2(o)
console.log(o)

console.log(exports)

module.exports = o

console.log(1)
