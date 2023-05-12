import React from 'react'; 
import { Routes, Route } from "react-router-dom";
import BaseHome from '../components/Base';
import Login from '../components/Login';

const RouterApp = () => {
    return(
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<BaseHome />} />
        </Routes>
    )
}

export default RouterApp;