import React from 'react'
import { Navigate } from 'react-router-dom';

const RequiredAuth = ({ children }) => {
    const loggedIn = localStorage.getItem("loggedIn", true);

    if (!loggedIn) {
        return <Navigate to="/auth/login" />
    }


    return children
}

export default RequiredAuth;