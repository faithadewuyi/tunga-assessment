import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProtectedRoutes = () => {


    const user = useSelector((state)=>state.auth.user)
 if(!user){
    toast.error("please login to access this page!")
 return <Navigate to ="/login" replace />
} 
  
    return 
    <Outlet/>
      
    
      
}

export default ProtectedRoutes
