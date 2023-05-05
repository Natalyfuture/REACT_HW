import { Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';

import './App.css'

import Task1 from './TASK_1/Task1';
import Task2 from './TASK_2/Task2';

const RouterApp = () => {
    
    return(
        <>
        <div className='router-wrapper'>
            <div className='header-link'>
                <NavLink to="/" activeClassName="active">Task_1</NavLink>
            </div>
            <div className='header-link'>
                <NavLink to="/task2" activeClassName="active">Task_2</NavLink>
            </div>
        </div>
        <Routes>
            <Route path='/*' element={<Task1 />} />
            <Route path='/task2' element={<Task2 />} />  
        </Routes>
        </>
    )
    
}

export default RouterApp;