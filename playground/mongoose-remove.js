const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id: '5a95ddca64a87b8678829e03'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5a95ddca64a87b8678829e03').then((todo) => {
  console.log(todo);
});
