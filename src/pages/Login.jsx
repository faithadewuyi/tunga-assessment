import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../auth/auth';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 

    let newErrors = { name: "", email: "", password: "" };

    // Basic validation checks
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";

    
    if (email && password && (email !== "login@tunga.com" || password !== "tunga123")) {
      if (email !== "login@tunga.com") newErrors.email = "Incorrect email. Enter the correct email.";
      if (password !== "tunga123") newErrors.password = "Incorrect password. Enter the correct password.";
    }

    setErrors(newErrors);

  
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    
    dispatch(login({ name, email }));
    alert(`Welcome, ${name}!`);
    navigate("/students");
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10 bg-[#b37159]">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-sm rounded-xl p-8 max-w-xl max-h-auto w-full space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-[#873e23] mb-6">
          Please Login 
        </h1>
        <p>Check the Home page for the login credentials</p>

        <div className="mb-4">
          <label 
            htmlFor="name"
            className="block text-lg  font-semibold mb-2 text-[#873e23]"
          >
            Name
          </label>
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
            value={name}
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#873e23]"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label 
            htmlFor="email"
            className="block text-lg  font-semibold mb-2 text-[#873e23]"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#873e23]"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4 relative">
          <label 
            htmlFor="password"
            className="block text-lg  font-semibold mb-2 text-[#873e23]"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#873e23]"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500"
          >
            {passwordVisible ? "Show" : "Hide"}
          </button>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#873e23] text-white py-2 rounded-full hover:bg-[#5a2b18] transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
