const providerSchema = {
  active: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: null
  },
  email: {
    type: String,
    minlength: 7,
    maxlength: 255
  }
}

module.exports = providerSchema
