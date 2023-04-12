import React, { Component } from 'react';
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import '../App.css'

import { Task_4 } from '../Task4/Task_4';
import { Task_1 } from '../Task1/Task_1';
import { Task_2 } from '../Task2/Task_2';
import { Task_3 } from '../Task3/Task_3';
import { Task_5 } from '../Task5/Task_5';
import { TaskDescription } from './TaskDescription';
import arrow from './arrow.svg'


export default class RouterApp extends Component {
    render() {
        return <div>
            <div>
                <div>
                    <Link to="/">Main</Link>
                </div>
                <div>
                    <Link to="/task1">Task_1 </Link>
                </div>  
                <div>
                    <Link to="/task2">Task_2</Link>
                </div>
                <div>
                    <Link to="/task3">Task_3</Link>
                </div>
                <div>
                    <Link to="/task5">Task_5</Link>
                </div>
                <div>
                    <Link to="/description">TaskDescription</Link>
                </div>
                <button>{<img src={arrow} className='arrow'/>}</button>
                
            </div>
            <Routes>
            <Route path="/" element={<Task_4 />} />
            <Route path="/task1" element={<Task_1 />} />
            <Route path="/task2" element={<Task_2 />} />
            <Route path="/task3" element={<Task_3 />} />
            <Route path="/task5" element={<Task_5 />} />
            <Route path="/description" element={<TaskDescription />} />
            </Routes>
        </div>
    }
}