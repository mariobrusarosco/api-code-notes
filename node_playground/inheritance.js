const EventEmitter = require('events')
const util = require('util')

class Gretter2 extends EventEmitter {
	constructor() {
		super()
		this.grettingProp = 'Gretting prop'
	}

	greet(data) {
		this.emit('greet', data)
	}
}

function Gretter() {
	EventEmitter.call(this)
  this.grettingProp = 'Gretting prop'
}

util.inherits(Gretter, EventEmitter)
// Gretter.prototype = EventEmitter.prototype
// Gretter.prototype = Object.create(EventEmitter.prototype)

Gretter.prototype.greet = function(data) {
  this.emit('greet', data)
}

exports.Gretter = Gretter
exports.Gretter2 = Gretter2
