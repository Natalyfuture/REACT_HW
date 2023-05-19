import React, {useState} from 'react'; 
import { Routes, Route , Navigate} from "react-router-dom";
import BaseHome from './Home';
import Auth from '../components/Auth';
import Register from '../components/Register';
import { Loader } from './Loader';

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
    const [loaderOff, setLoaderOff] = useState(false);

    return(
        <>
        <Routes>
            <Route 
                path='/' 
                element={
                    <PrivateRoute>
                        <div className='home_wrapper'>
                            <BaseHome />
                            <div className='loader_wrapper'>
                                {!loaderOff &&  
                                <Loader loaderOff={loaderOff}  setLoaderOff={setLoaderOff}/>
                                }
                            </div>
                        </div> 
                    </PrivateRoute>
                   } 
            />     
            <Route path='/register' element={<Register />} />
            <Route 
            path='/login' 
            element={currentUser ? <Navigate to='/' /> : <Auth />} />
            <Route path='/loader' element={<Loader />} />

            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
        </>
           
    )
}

export default RouterApp;