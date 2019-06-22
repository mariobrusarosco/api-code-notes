const fs =  require('fs')
const zlib = require('zlib')

let readable = fs.createReadStream(__dirname + '/log.txt', {
  encoding: 'utf-8',
  highWaterMark: 32 * 1024
})

let writable = fs.createWriteStream(__dirname + '/new-log.txt')


readable.pipe(writable)

const compressed = fs.createWriteStream(__dirname + '/new-log.txt.gz')
const gzip = zlib.createGzip()

readable.pipe(gzip).pipe(compressed)
