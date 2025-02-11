import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectAuthLoading, selectUser } from '../auth/auth';

const ProtectedRoutes = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectAuthLoading);

  if (loading) {
    return(
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <svg className="animate-spin h-10 w-10 text-[#873e23]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
        <path d="M4 12a8 8 0 018-8" strokeOpacity="1" />
      </svg>
    </div>
    )
  }

  if(!user){
    toast.error("Please login to access this page!")
    return<Navigate to="/login" replace/>
  }

  return <Outlet />;
};

export default ProtectedRoutes;
