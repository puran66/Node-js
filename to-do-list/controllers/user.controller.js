const { userServices } = require("../services");

const loginPage = (req,res) =>{
  try{
    res.status(200).render('login');
  }
  catch(err){
    console.log(err);
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide email and password");
    }

    const user = await userServices.addUser(email, password);

    res.status(200).cookie('userId', user._id).redirect('/v1/Home');
  }
  catch (err) {
    console.log(err, "from user login");
  }
}

module.exports = { login ,loginPage}