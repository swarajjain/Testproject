const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'caseStudyDB'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
 if (error) {
    return console.log('Unable to connect DB')
 }

 console.log('Connected successfully!')

 const db = client.db(databaseName)

//  db.collection('Role').insertMany([{
// //    email: 'swaraj.jain@cogniznat.com', 
// //    username: 'Swaraj',
// //    password: '12345'
//     id: 1,
//     roles: 'user'
//  }, {
//      id: 2,
//      roles: 'pm'
//  }, {
//      id: 3,
//      roles: 'admin'
//  }]
// , (error, result) => {
//      if (error) {
//         return console.log('Unable to insert data')
//      }
//      console.log(result.ops)
//  })

 db.collection('Role').findOne({roles: 'admin'}, (error, result) => {
     if (error) {
         console.log('Unable to find')
     }
     console.log(result)
 })

 db.collection('Role').find({roles: 'admin'}).toArray((error, result) => {
     console.log(result)
 })

 db.collection('Role').find({roles: 'admin'}).count((error, count) => {
    console.log(count)
})

})
