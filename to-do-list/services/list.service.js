const { userListSchema } = require("../models")

const getData = () => {
  return userListSchema.find({}).populate('userId')
}

const addToDo = (body) => {
  return userListSchema.create(body);
}

const findToDoById = (id) => {
  return userListSchema.findById({ _id: id });
}

const updateToDo = (body) => {
  const id = body._id;

  return userListSchema.findByIdAndUpdate({ _id: id }, body)
}

const removeToDo = (id) => {
  return userListSchema.findByIdAndDelete({ _id: id });
}

module.exports = { addToDo, getData, findToDoById, updateToDo, removeToDo }