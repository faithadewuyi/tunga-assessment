
import { toast } from 'react-toastify';

import { useNavigate, useParams } from "react-router-dom";
import { studentsData } from "../context/StudentContext";
import { useEffect, useState } from "react";

const EditStudent = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  
  const [student, setStudent] = useState({
    name: '',
    email: '',
    age: '',
    course: ''
  });
  const [error, setError] = useState('');
  
  
  useEffect(() => {
    const studentToEdit = studentsData.find(student => student.id === parseInt(id));
    if (studentToEdit) {
      setStudent(studentToEdit);
    } else {
      toast.error('Student not found!');
      navigate('/students'); 
    }
  }, [id, navigate]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  
  const validateForm = () => {
    if (!student.name || !student.email || !student.age || !student.course) {
      setError('All fields are required.');
      return false;
    }
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(student.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (isNaN(student.age) || student.age <= 0) {
      setError('Age must be a valid number.');
      return false;
    }
    setError('');
    return true;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      const updatedStudent = { id: parseInt(id), name:student.name, email:student.email, age: student.age, course: student.course }; 

      
      const updatedStudentsData = studentsData.map((student) =>
        student.id === id ? updatedStudent : student
      );
      console.log('Updated student data:', updatedStudent);
      toast.success('Student updated successfully!');
      navigate(`/students/${id}`);
    } else {
      toast.error('Please fix the errors.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-[#873e23] mb-6 text-center">
        Update Student Information
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#873e23]"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#873e23]"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-lg font-semibold text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={student.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#873e23]"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="course" className="block text-lg font-semibold text-gray-700">
            Course
          </label>
          <input
            type="text"
            id="course"
            name="course"
            value={student.course}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#873e23]"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#873e23] text-white py-2 px-6 rounded-full hover:bg-[#5a2b18] transition duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
