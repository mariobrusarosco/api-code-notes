const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  // Simple validation
  name: {
    required: true,
    type: String,
    minlength: 3,
    maxlength: 200
    // match: /a regex here/
  },
  // Enumeration Validation
  // authTypes: {
  // 	type: String,
  // 	required:  true,
  // 	enum: ['email', 'google', 'facebook']
  // },
  // Custom Validation
  authTypes: {
    type: Array,
    // type: Array<String>,
    validate: {
      validator: function(v) {
        return v && v.length > 0
      },
      message: 'An user must have at least one type of authentication'
    }
  },
  // Asyncrhonous Validation
  // authTypes: {
  // 	type: Array,
  // 	validate: {
  // 		isAsync: true,
  // 		validator: function(v, cb) {
  // 			setTimeout(() => {
  // 				const validationResult = v && v.length > 0
  // 				cb(validationResult)
  // 			}, 5000)
  // 		},
  // 		message: 'An user must have at least one type of authentication'
  // 	}
  // },
  email: String,
  lastAccess: {
    type: Date,
    default: Date.now()
  },
  isPublished: Boolean,
  // Conditional Validation
  numberOfPurchases: {
    type: Number,
    required: function() {
      return this.isPublished
    }
  },
  username: String
})

module.exports = userSchema
