const { userServices } = require("../services");

const userValidAuth = async (req, res, next) => {
  try {
    const uuid = req.cookies.uuid;
    console.log(uuid);

    if (!uuid) {
      res.redirect('/login')
      throw new Error("Login First!")
    }

    const userExist = userServices.existuser(uuid);

    if(!userExist){
      res.redirect('/signUp')
      throw new Error("user not found");
    }

    next();
  }
  catch(err){
    console.log(err,"from  valid auth middleware");
  }
}

module.exports = {userValidAuth}