const express = require("express");
const router = express.Router();
const { deleteStudent,  updateStudent, saveStudent, getStudentById, getStudents} = require("../controllers/StudentController");

router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.post("/students", saveStudent);
router.patch("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent)

module.exports = router;
