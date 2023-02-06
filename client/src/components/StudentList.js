
import axios from "axios"
import React, { useState, useEffect } from "react";
import { getStudents } from "../../../back/controllers/StudentController";




const StudentList = async () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
      setStudent();
    }, []);

    const getStudents = async () => {
        const response = await axios.get("http://localhost:500/students/${id");
    setStudent(response.data);
    }

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/student/${id}`)
            getStudents();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
    
        </div>
    )

}

export default StudentList;