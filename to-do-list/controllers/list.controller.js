const { listServices } = require("../services");


const getHome = async (req, res) => {
  try {
    const data = await listServices.getData();
    // console.log(data);
    res.status(200).render('index', { data: data });
  }
  catch (err) {
    console.log(err, 'error in home route');
  }
}

const addTodo = async (req, res) => {
  try {
    const body = req.body;
    const id = req.cookies.userId
    // console.log(id);

    if(!id){
      throw new Error( "Please login first" );
    }
    const toDo = {
      toDo: body.toDo,
      time: body.time,
      date: body.date,
      userId : id
    }
    // console.log(body);

    const createtoDo = await listServices.addToDo(toDo);

    res.redirect('/v1/Home');
  }
  catch (err) {
    console.log(err, 'Error adding todo');
    return res.status(500).json({ message: "Server error" });
  }
}

const redirectToUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);

    if (!id) {
      throw new Error("id not found")
    }

    const user = await listServices.findToDoById(id);
    // console.log(user);

    res.status(200).render('update', { user: user })
  }
  catch (err) {
    console.log(err, "from redirect to upadte");
  }
}

const updateTodo = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const updatedToDo = await listServices.updateToDo(body);

    res.status(200).redirect("/Home");
  }
  catch (err) {
    console.log(err, "from the update toDo");
  }
}

const removeTodo = async (req,res) =>{
  try{
    const id = req.params.id;
    console.log(id);

    const  removedToDo = await listServices.removeToDo(id);

    res.status(200).redirect('/Home');
  }
  catch(err){
    console.log(err,"from the delete todo");
  }
}

module.exports = { getHome, addTodo, redirectToUpdate, updateTodo ,removeTodo };