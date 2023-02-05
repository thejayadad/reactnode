const Student = require("../model/Student");

//GET ALL STUDENTS
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//STUDENT BY ID
const getStudentById = async(req, res) => {
    try {

        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//INSERT STUDENT

const saveStudent = async(req, res) => {
    const student = new Student(req.body)
    try {
        const savestudent = await student.save();
        res.status(201).json(savestudent);
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}

//UPDATE STUDENT
const updateStudent = async (req, res) => {
    try {
        const updateStudent = await Student.updateOne({_id: req.params.id}, {$set: req.bodu});
        res.status(200).json(updateStudent);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//DELETE STUDENT
const deleteStudent = async(req, res) => {
    try {
        const deletestudent = await Student.deleteOne({_id: req.params.id});
        res.status(200).json(deletestudent);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {deleteStudent,  updateStudent, saveStudent, getStudentById, getStudents};
