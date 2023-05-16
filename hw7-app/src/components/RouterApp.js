import React from 'react'; 
import { Routes, Route , Navigate} from "react-router-dom";
import BaseHome from './Home';
import Auth from '../components/Auth';
import Register from '../components/Register';

import '../css/main.css';
import { AuthContext } from './AuthContext';



const PrivateRoute = ({children}) => {
    let { currentUser} = React.useContext(AuthContext);

    if(currentUser === null){
        return <Navigate to='/login' />;
    }
    return children;
}

const RouterApp = () => {
    const { currentUser} = React.useContext(AuthContext)
    return(
        <>
        <Routes>
            <Route 
                path='/' 
                element={
                    <PrivateRoute>
                        <BaseHome />
                    </PrivateRoute>} 
            />
            <Route path='/register' element={<Register />} />
            <Route 
            path='/login' 
            element={currentUser ? <Navigate to='/' /> : <Auth />} />

            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
        </>
           
    )
}

export default RouterApp;