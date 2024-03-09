const { userLoginSchema } = require("../models")

const addUser = (email,password) =>{
  return userLoginSchema.create({
    email: email,
    password: password
  })
}

module.exports = {addUser}