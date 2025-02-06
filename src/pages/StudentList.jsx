import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
    const user = useSelector((state)=> state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const studentsData = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 20, course: "Computer Science" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", age: 22, course: "Mathematics" },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 21, course: "Physics" },
        { id: 4, name: "Diana Prince", email: "diana@example.com", age: 23, course: "Biology" },
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            age: 22,
            course: 'Computer Science',
            enrollmentDate: '2023-09-01'
          },
      ];

    const handleLogout=()=>{
        dispatch(logout());
        navigate("/")
    }

    if(!user){
        navigate("/login");
        return null
    }
  return (
    <div>
      <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, <span className="text-red-900">{user.name}</span></h1>
      <button onClick={handleLogout} className="mt-4 bg-red-500 text-white py-1 px-4 rounded">
        Logout
      </button>
    </div>
    </div>
  )
}

export default StudentList
