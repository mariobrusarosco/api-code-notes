// The default enconding is utf-8
const buf = new Buffer('Hello', 'utf-8')

console.log(buf)
console.log(buf.toString())
console.log(buf.toJSON())

buf.write(' World!!!!!')

console.log(buf.toString()) // Parts of the string must be cutted...cause buffers supossed to be a finite size!!!!
