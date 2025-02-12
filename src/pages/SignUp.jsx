import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { login } from "../auth/auth";

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    setErrors({ name: "", email: "", password: "" });
    if (!name){
        setErrors((prev)=>({ ...prev, name: "Name is required"}))
        return;
    }
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      return;
    } else if (!isValidEmail(email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      return;
    }

    if (!password || password.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }));
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      const userData= {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
      }
      dispatch(login(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/students");
    } catch (error) {
      console.error(error.message);
      setErrors((prev) => ({ ...prev, password: error.message }));
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-[#837159]">
      <form onSubmit={handleSignUp} className="bg-white shadow-sm rounded-xl p-8 max-w-xl w-full space-y-4">
        <h1 className="text-2xl font-bold text-center text-[#873e23] mb-6">Welcome, Please Sign Up</h1>

        {/* Name Input */}
        <div className="mb-4">
        <label className="block text-lg font-semibold mb-2 text-[#873e23]">Full Name</label>
        <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => {
        setName(e.target.value);
      setErrors((prev) => ({ ...prev, name: "" }));
    }}
    className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-[#873e23]"
  />
  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
</div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-[#873e23]">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" })); 
            }}
            className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-[#873e23]"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <label className="block text-lg font-semibold mb-2 text-[#873e23]">Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" })); 
            }}
            className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-[#873e23]"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-500"
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Sign Up Button */}
        <button type="submit" className="w-full bg-[#873e23] text-white py-2 rounded-full hover:bg-[#5a2b18] transition">
          Sign Up
        </button>

        {/* Login Link */}
        <div className="flex justify-center items-center mt-4">
          <p className="text-sm">Already have an account?</p>
          <Link to="/login" className="ml-2 text-[#873e23] font-semibold hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
