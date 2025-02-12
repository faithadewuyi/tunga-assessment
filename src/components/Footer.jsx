import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#837159] ] text-white py-6 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        
        <div>
          <h2 className="text-xl font-bold">Student Management App</h2>

        </div>

        {/* Quick Links */}
        {/* <div className="mt-4 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
            <li><a href="/students" className="hover:text-white">Students</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div> */}

        {/* Social Media Links */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="https://www.github.com/faithadewuyi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          
          <a href="https://www.linkedin.com/in/faithadewuyi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-900 text-sm mt-4">
        &copy; {new Date().getFullYear()} Faith's Student Management App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
