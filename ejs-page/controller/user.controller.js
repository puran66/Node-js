const { userService } = require("../service");

const getHome = async(req, res) => {
  try {
    const data = await  userService.getDataList();
    // console.log(data);

    res.status(200).render('home',{data:data});
  }
  catch (err) {
    console.log(err);
  }
}

const addData = async (req, res) => {
  try {
    const body = req.body;

    if (!body) {
      throw new Error("inputs required...")
    }

    const bike = {
      company: body.company,
      model: body.model,
      milage: body.milage
    }
    // console.log(bike);

    const addedBike = await userService.add(bike);

    // console.log(addedBike);

    res.status(201).redirect("/v1/home")
  }
  catch (err) {
    console.log(err, "from  error in adding data");
  }
}

const deleteData = async (req,res)=>{
  try{
    const id = req.params.id;
    // console.log(id);

    if(!id){
      throw new Error("id required..")
    }

    const deleted = await userService.deleteData(id);

    res.status(204).redirect('/v1/home')
  }
  catch(err){
    console.log(err,"in the delete function");
  }
}

module.exports = { getHome, addData ,deleteData};