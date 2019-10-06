db = db.getSiblingDB('local-code-notes')

db.users.drop()
db.users.insertMany([
  {
    lastAccess: ISODate('2019-02-16T15:11:24.794Z'),
    name: 'Mario Brusarosco',
    email: 'mariobrusaroscog@gmail.com'
  },
  {
    firstname: 'Mario',
    lastname: ' Brusarosco',
    email: 'test@test.com',
    username: 'mabrusarosco',
    authTypes: {
      emailAndPassword: {
        email: 'test@test.com',
        password: 'asdsdsa'
      }
    }
  }
])
