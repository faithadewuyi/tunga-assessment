import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import StudentList from './pages/StudentList';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/ProtectedRoutes';
import StudentDetail from './pages/StudentDetail';
import EditStudent from './pages/EditSudent';
import SignUp from './pages/SignUp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './auth/firebase';
import { login, logout, setLoading } from './auth/auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (setLoading(true))

    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        dispatch(login({uid: user.uid, email: user.email}))
      }else{
        dispatch(logout())
      }
      dispatch(setLoading(false))
    });
    return () => unsubscribe()
  }, [dispatch])
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/students" element={<StudentList />} />
            <Route path = "/students/:id" element={<StudentDetail/>}/>
            <Route path="/students/:id/edit" element={<EditStudent />} />
          </Route>
          

        </Routes>
      </div>
    </Router>
  );
};

export default App;
