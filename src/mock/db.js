db = db.getSiblingDB('local-code-notes')

db.users.drop()
db.users.insertMany([
  {
    _id: '5d9a3d6bbdf610e64d3d9005',
    firstname: 'Mario',
    lastname: ' Brusarosco',
    email: 'default@default.com',
    username: 'mabrusarosco',
    authTypes: {
      emailAndPassword: {
        email: 'test@test.com',
        password: 'asdsdsa'
      }
    }
  }
])

db.topic.insertMany([
  {
    label: 'javascript'
  },
  {
    label: 'java'
  },
  {
    label: 'node'
  },
  {
    label: 'css'
  },
  {
    label: 'html'
  }
])

// db.notes.insertMany([
//   {
//     user: '5d9a3d6bbdf610e64d3d9005',
//     languages:
//   }
// ])
