const fs = require('fs')

const log = fs.readFileSync(__dirname +  '/log.txt')
// console.log(log.toString())


const logAsycn = fs.readFile(`${__dirname}/log.txt`,
  function(err, data) {
    console.log(data)
  }
)
