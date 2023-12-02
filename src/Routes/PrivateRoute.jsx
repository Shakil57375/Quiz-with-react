/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Loader from '../Components/Pages/Loader/Loader';

const PrivateRouter = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);
    // console.log(user);
    if(loader){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from : location
    }} replace></Navigate>;
};

export default PrivateRouter;