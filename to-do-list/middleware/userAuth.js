const userAuth = (req, res, next) => {
  try {
    const id = req.cookies.userId

    if (!id) {
      res.redirect('/loginPage')
      throw new Error("You must be logged in to view this resource.");
    }

    next();
  }
  catch (err) {
    console.log(err, "from userAuth the middleware");
  }
}

module.exports = { userAuth };