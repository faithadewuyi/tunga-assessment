import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-10">
      <div className="flex items-center justify-between py-3 px-4 md:px-6 gap-2">
        {/* Logo */}
        <h1 className="font-bold text-[#873e23] ml-4 text-2xl">Faith</h1>

        {/* Centered Links */}
        <div className="flex-1 flex justify-center"> 
          <div
            className={`${
              isOpen ? "block" : "hidden"
            }  md:static space-x-6 left-2 w-full md:w-auto bg-white md:flex items-center space-y-4 md:space-y-0 md:space-x-4  px-4 md:px-0`}
          >
            <Link to="/" className="text-lg hover:font-bold hover:text-[#e28743]">
              Home
            </Link>
            <Link to="/students" className="text-lg hover:font-bold hover:text-[#e28743]">
              Student
            </Link>
            <button onClick={()=>{
              navigate("/signup")
              setIsOpen(false)
            }} className="w-full bg-[#873e23] text-white py-2 rounded-full hover:bg-[#5a2b18] px-4 transition duration-300 pointer">
           Sign Up 
             </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden  focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoCloseSharp size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
