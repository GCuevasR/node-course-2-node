// MongoDB module v3
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

var user = {name: 'Guilberto', age: 42};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  // .findOneAndUpdate(
  //   {_id: new ObjectID("5a8b4359b23f3e70eccc1fbf")},
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   },
  //   {
  //     returnOriginal: false
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });

    db.collection('Users')
    .findOneAndUpdate(
      {_id: new ObjectID("5a8b36d2286d4e27fee7ddcb")},
      {
        $set: {
          name: 'Francisco'
        },
        $inc: {
          age: -2
        }
      },
      {
        returnOriginal: false
      })
      .then((result) => {
        console.log(result);
      });

  client.close();
});
