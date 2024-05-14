import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user , loading} =useContext(AuthContext)

    if(loading){
      return  <h1 className=" flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></h1>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from :location}}  replace></Navigate>
};

export default PrivateRouter;