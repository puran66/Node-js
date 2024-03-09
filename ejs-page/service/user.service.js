const { userSchema } = require("../model")

const getDataList = () => {
  return userSchema.find({});
}

const add = (body) => {
  return userSchema.create(body)
}

const deleteData = (id) => {
  return userSchema.findByIdAndDelete({ _id: id })
}

module.exports = { add, getDataList, deleteData }