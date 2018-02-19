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
  // .find({_id: new ObjectID('5a8b3a98b23f3e70eccc1e41')})
  // .toArray()
  // .then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos')
  // .find()
  // .count()
  // .then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users')
  .find({name: 'Guilberto'})
  .count()
  .then((count) => {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  client.close();
});
