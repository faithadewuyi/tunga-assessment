import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { studentsData } from '../context/StudentContext';
import { toast } from 'react-toastify';

const StudentList = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const loggedInUser = useSelector((state) => state.auth.user); 

    const [searchTerm, setSearchTerm] = useState("");

    if (loggedInUser) {
        studentsData[0].name = loggedInUser.name; 
        studentsData[0].email = loggedInUser.email; 
    }

    const filteredStudents = studentsData.filter(
        (student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.course.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLogout = () => {
        localStorage.removeItem("user");
        toast.info("See you soon!");
        navigate("/");
    };

    if (!user) {
        navigate("/login");
        return null;
    }

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-[#873e23] mb-6 text-center">
                Hi, {user.name}
            </h1>

            {/* Search Input */}
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search by name or course..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-lg p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#873e23]"
                />
            </div>

            {/* Student Table */}
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-[#873e23] text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">ID</th>
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Email</th>
                            <th className="py-2 px-4 text-left">Age</th>
                            <th className="py-2 px-4 text-left">Course</th>
                            <th className="py-2 px-4 text-left">Enrollment Date</th>
                            <th className="py-2 px-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student) => (
                                <tr key={student.id} className="border-b hover:bg-gray-100">
                                    <td className="py-2 px-4">{student.id}</td>
                                    <td className="py-2 px-4">{student.name}</td>
                                    <td className="py-2 px-4">{student.email}</td>
                                    <td className="py-2 px-4">{student.age}</td>
                                    <td className="py-2 px-4">{student.course}</td>
                                    <td className="py-2 px-4">{student.enrollmentDate}</td>
                                    <td className="py-2 px-4 relative">
                                        <button onClick={toggleDropdown} className="text-xl h-15">
                                            &#x22EE;
                                        </button>
                                        {isOpen && (
                                            <div
                                                className="absolute top-full right-0 bg-white shadow-lg rounded-md mt-2  flex flex-col z-50"
                                                style={{ position: "absolute", zIndex: 9999 }}
                                            >
                                                <Link
                                                    to={`/students/${student.id}`}
                                                    className="bg-[#873e23] text-white py-1 px-4 rounded-full hover:bg-[#5a2b18] transition duration-300 mb-1"
                                                >
                                                    View
                                                </Link>
                                                <Link
                                                    to={`/students/${student.id}/edit`}
                                                    className="bg-blue-400 text-white py-1 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">
                                    No students found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white py-1 px-4 rounded"
            >
                Logout
            </button>
        </div>
    );
};

export default StudentList;
