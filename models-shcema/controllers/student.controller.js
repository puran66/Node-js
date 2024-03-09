const { studentService } = require("../services");

const addStudent = async (req, res) => {
  console.log(req.body);

  let body = req.body;

  let students = await studentService.addStudent(body);

  res.status(201).json({
    "massage" :"Student add success",
    students
  })
}

module.exports = { addStudent }