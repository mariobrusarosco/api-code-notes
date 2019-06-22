// require('./functions')
// require('../values.js')

// console.log(module.exports)
// console.log(exports)

// ------ Custom Emiiter
// const Emitter = require('./emitter')

// const emitter = new Emitter()

// emitter.on('greet', () => {
//   console.log('Greet Event was emitted (custom emitter)')
// })

// emitter.on('greet', () => {
//   console.log('Second listener: Greet Event was emitted (custom emitter')
// })
// emitter.emit('greet')
// // ------ Custom Emiiter

// // ------ Node Native Emiiter
// const NodeEmitter = require('events')
// const nodeEmitter = new NodeEmitter()

// nodeEmitter.on('node-greet', () => {
//   console.log('Node greet event was emitted')
// })

// nodeEmitter.emit('node-greet')
// // ------ Node Native Emiiter

// // ------ Inheritance with Node Native Emiiter
// // const util = require('util')

// const Gretter = require('./inheritance').Gretter
// const Gretter2 = require('./inheritance').Gretter2

// const gretter = new Gretter()

// gretter.on('greet', data => {
//   console.log('greet event emitted inheritance!!!!!!', data)
// })

// gretter.greet('aeeeee')

// console.log(gretter)

// const gretter2 = new Gretter2()

// gretter2.on('greet', data => {
//   console.log('greet event emitted inheritance!!!!!!', data)
// })

// gretter2.greet('aeeeee')

// console.log(gretter2)
// // ------ Inheritance with Node Native Emiiter

// require('./buffers')

// require('./file-system')

require('./streams')
