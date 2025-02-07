import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentList from './pages/StudentList';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './components/ProtectedRoutes';
const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar/>
      <div className="pt-8">
        <ToastContainer position="top-right" autoClose={3000}/>
      <Routes>
        <Route path={<ProtectedRoutes/>}>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/students"
          element={isAuthenticated ? <StudentList /> : <Navigate to="/login" />}
        />
        
        </Route>
        
      </Routes>
      </div>
    </Router>
  );
};

export default App;
