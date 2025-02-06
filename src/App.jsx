import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentList from './pages/StudentList';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar/>
      <div className="pt-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/students"
          element={isAuthenticated ? <StudentList /> : <Navigate to="/login" />}
        />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
