import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ProjectContextComponent } from '../context/Context';

export default function ProtectedRouter ({ children }) {
    let [{userName}, ] = useContext(ProjectContextComponent);
    if(!userName){
        return <Navigate to='/login' />;
    }
    return children;
}