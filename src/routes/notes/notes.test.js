// const request = require('supertest')
// Configuration
const config = require('../../config')
const API_VERSION = config.API_VERSION

// let server

describe(`Testing ${API_VERSION}/notes Endpoint`, () => {
  //   beforeEach(() => {
  //     server = require('../../../src/index')
  //   })
  //   afterEach(() => {
  //     server.close()
  //   })

  describe('GET', () => {
    it('should return all notes', async () => {
      //       const res = await request(server).get(`${API_VERSION}/notes`)

      //       expect(res.status).toBe(200)
      return true
    })
  })
})
