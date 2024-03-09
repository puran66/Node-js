const { userSchema, userSignUpSchema } = require("../models");
const userSession = new Map();


const createUser = (body) => {
  return userSignUpSchema.create({
    fullName: body.fullName,
    email: body.email,
    password: body.password
  })
}

const setSessionUser = (id, user) => {
  userSession.set(id, user);
}
const getSessionUser = (id) => {
  return userSession.get(id);

}

const findUrls = (id) => {
  return userSchema.find({ createdBy: id })
}

const checkExistUser = (body) => {
  return userSignUpSchema.findOne({
    email: body.email,
    password: body.password
  })
}
const existuser=(id)=>{
  return userSignUpSchema.findOne({_id : id})
}
const createUrl = (body) => {
  return userSchema.create(body);
}



const getData = () => {
  return userSchema.find().populate('createdBy')
}

const checkExist = (shortId) => {
  const shortUrl = `http://localhost:4000/${shortId}`
  return userSchema.findOneAndUpdate({ shortUrl: shortUrl }, { $inc: { clicks: 1 } }, { new: true })
}

module.exports = { createUrl, getData, existuser, checkExist, createUser, checkExistUser, findUrls, setSessionUser, getSessionUser }