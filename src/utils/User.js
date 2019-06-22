const userPublicData = user => {
  const { _id, firstname, lastname, email, authType } = user

  return { id: _id, firstname, lastname, email, authType }
}

// Just an example of a case where we throw an error
const userPublicData2 = user => {
  const { _id, firstname, lastname, email, authType } = user

  if (!firstname) {
    throw new Error('Just testing throw exceptions')
  }

  return { id: _id, firstname, lastname, email, authType }
}

module.exports = { userPublicData, userPublicData2 }
