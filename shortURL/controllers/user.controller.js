const shortid = require('shortid');
const { userServices } = require('../services');
const { userSchema } = require('../models');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid')

const login = async (req, res) => {
  try {
    res.status(200).render('login')
  }
  catch (err) {
    console.log(err, "from  login controller");
  }
}

const signUp = async (req, res) => {
  try {
    res.status(200).render('signUp')
  }
  catch (err) {
    console.log(err, "from  signUp controller");
  }
}

const createUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    if (!body) {
      throw new Error("Invalid request")
    }

    const newUser = await userServices.createUser(body);

    res.status(201).axios
  }
  catch (err) {
    console.log(err, "from create user Controller");
  }
}

const userLogin = async (req, res) => {
  try {
    const body = req.body;
    // console.log(body);

    if (!body) {
      throw new Error("inputs required in login")
    }

    const exist = await userServices.checkExistUser(body)
    console.log(exist._id.toString());

    if (!exist) {
      return res.status(403).json({ message: 'user not found' })
    }
    else {
      const userSessionId = uuidv4();

      userServices.setSessionUser(userSessionId, exist);

      res.cookie('uuid', exist._id.toString())

      return res.redirect('/')

      // const urls = await userServices.findUrls(exist._id);
      // // console.log(urls);

      // res.status(200).render('index', { urls })
      // const response = await axios.get('http://localhost:4000/homePage')
      // res.status(response.status).render('index')
    }
  }
  catch (err) {
    console.log(err, "from  user login controller");
  };
}

const createUrl = async (req, res) => {
  try {
    const orignalUrl = req.body.orignalUrl;
    // console.log(req);

    if (!orignalUrl) {
      throw new Error("Url Must Required..");
    }

    const shortId = shortid();

    const shortUrl = `http://localhost:4000/${shortId}`;
    const uuid = req.cookies.uuid;
    // console.log(uuid);

    const body = {
      orignalUrl: orignalUrl,
      shortUrl: shortUrl,
      clicks: 0,
      createdBy: uuid
    }

    const newShortUrl = await userServices.createUrl(body);
    // console.log(newShortUrl);

    if (newShortUrl) {
      res.redirect('/')
    }
  }
  catch (err) {
    res.status(400).json({
      message: "bad request",
      err
    })
  }
}

// const handleredirectUrl = async (req, res) => {
//   try {
//     const shortId = req.params.shortid;

//     console.log(shortId);

//     if (!shortId) {
//       throw new Error("ID must be provided");
//     }

//     const newgen = await userServices.getUrl(shortId);

//     console.log(newgen);

//     if (!newgen || !newgen.redirectUrl) {
//       throw new Error("No redirect URL found for the provided short ID");
//     }

//     res.redirect(newgen.redirectUrl)
//   } catch (err) {
//     console.log(err, "redirect url error");
//     res.status(400).json({
//       message: "Bad request",
//       error: err.message
//     });
//   }
// }

const redirectUrl = async (req, res) => {
  try {
    const shortId = req.params.shortId;

    // console.log(shortId);
    if (!shortId) {
      throw new Error("shortId must required")
    }

    const exisUrl = await userServices.checkExist(shortId)

    console.log(exisUrl.orignalUrl)

    res.redirect(exisUrl.orignalUrl)
  }
  catch (err) {
    console.log(err, "form the redirectUrl");
  }

}

const homePage = async (req, res) => {

  try {
    const uuid = req.cookies.uuid;
    const data = await userServices.getData();

    // console.log(data);
    res.status(200).json({
      data:data
    })
  }
  catch (err) {
    console.log(err, "from the homepage req");
  }
}

module.exports = { createUrl, homePage, redirectUrl, login, createUser, signUp, userLogin }