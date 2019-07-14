const { userPublicData, userPublicData2 } = require('../src/utils/User')

// Mock Data
const mockDatabaseUser = {
  _id: '795428d42asda',
  firstname: 'Test',
  lastname: 'User',
  email: 'user@test.com',
  authType: ['email'],
  forbbidenProp1: 'no_1!!',
  forbbidenProp2: 'no_2!!'
}

const mockPublicUser = {
  id: '795428d42asda',
  firstname: 'Test',
  lastname: 'User',
  email: 'user@test.com',
  authType: ['email']
}

describe('Util Test', () => {
  it('Must only show public properties of an User', () => {
    const publicUser = userPublicData(mockDatabaseUser)

    expect(publicUser).toEqual(mockPublicUser)
  })

  it('Must throw an error if no firstname is passed', () => {
    expect(() => userPublicData2({ lastname: 'Brusarosco' })).toThrow()
  })
})

// Testing String
// toBe('Mario') --> exact string
// toContain('Mario') --> Almost a regex...almost
// toMatch(/Mario/) --> Using regex

/* Testing Arrays
-- Instead of
--  expect(arrayTested).toContain('email')
--  expect(arrayTested).toContain('facebook')

-- Use
-- expect(arrayTested).toEqual(expect.arrayContaining(['email','facebook']))
          or
-- expect((['email','facebook']).toEqual(expect.arrayContaining(arrayTested))
*/

// Testing Objects
/*
  toEqual({ prop1: 'val1',....})
    --- The expected object must have the same properties with its values passed to toEqual()

  toMatchObject({ prop1: 'val1',....})
    --- The expected object must have at least the passed properties with its values in it. But it could have more other properties

  toHaveProperty('name', 'email')
    --- Just check if some properties exists

*/
// const { _id ,firstname, lastname, email, authType } = user

/* Testing Exceptions

expect(() => myFn().toThrow())
*/

/* JEST Mock Functions

-- Basic Example
const mockFunction = jest.fn()

mockFunction.mockeReturnedValue(1)
mockFunction.mockResolvedValue(1) // As a Suceessful Promise
mockFunction.mockRejectedValue(new Error(',,,')) // As a Rejected Promise

console.log(mockFunction())  // 1

*/
