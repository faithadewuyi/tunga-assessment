
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Home = () => {
  return (
    <div className="bg-gray-50  min-h-screen">
      
      <div
         className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center "
       style={{ backgroundImage: "url('./student.jpg')" }}
       >
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt- ">
        <div className="bg-white shadow-sm rounded-xl p-8 max-w-xl max-h-auto w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Student Management System</h1>

          <p className="text-gray-600 mb-4">
            This project evaluates React proficiency with state management using Redux and firebase authentication. 
            It's the first assessment for Tunga.
          </p>

          {/* <p className="text-gray-700 font-medium mb-4">
            Please log in to access the student management system.
          </p> */}

          {/* <div className="bg-gray-100 p-4 rounded-md mb-4 text-sm text-left">
            <p className="text-gray-800 font-semibold text-center">Demo Credentials:</p>
            <p>Name: <span className="font-medium text-gray-900">Enter your name</span></p>
            <p>Email: <span className="font-medium text-gray-900">login@tunga.com</span></p>
            <p>Password: <span className="font-medium text-gray-900">tunga123</span></p>
          </div> */}
      <Login/>
          {/* <Link to="/login">
          <button className="w-full bg-[#873e23] text-white py-2 rounded-lg hover:bg-[#5a2b18] px-4 transition duration-300 pointer">
           Login to Continue
             </button>
           </Link> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
