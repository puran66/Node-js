const {studentSchema} =require('../models')

const addStudent = (body) => {
  return studentSchema.create(body)
}

module.exports ={addStudent}