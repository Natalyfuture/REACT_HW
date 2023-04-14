import React, { Component, useEffect, useState } from 'react';
import { Routes, Route, Link, useParams, Outlet, useNavigate} from 'react-router-dom';

import '../App.css'

import { Task_4 } from '../Task4/Task_4';
import { Task_1 } from '../Task1/Task_1';
import { Task_2 } from '../Task2/Task_2';
import { Task_3 } from '../Task3/Task_3';
import { Task_5 } from '../Task5/Task_5';
import { TaskDescription1 } from './DescriptionTask1';
import { TaskDescription2 } from './DescriptionTask2';
import { TaskDescription3 } from './DescriptionTask3';
import { TaskDescription4 } from './DescriptionTask4';
import { TaskDescription5 } from './DescriptionTask5';
import { TaskDescription6 } from './DescriptionTask6';
import arrow from './arrow.svg'


const TaskDescription = () =>{
    return <div>
        <div><Link to='/description/task1'>Task #1 - Toggler HOC</Link></div>
        <div><Link to='/description/task2'>Task #2 - Fetching Data HOC</Link></div>
        <div><Link to='/description/task3'>Task #3 - render-props</Link></div>
        <div><Link to='/description/task4'>Task #4: - Tooltip</Link></div>
        <div><Link to='/description/task5'>Task #5 - custom hooks</Link></div>
        <div><Link to='/description/task6'>Task #6 - React Router</Link></div>
        <Outlet />
    </div>
    
}

const TaskDescriptionId = () => {
    const { taskId } = useParams();
    const navigate  = useNavigate ();
    

    const taskComponents = [
        {
            condition: taskId === "task1",
            component: <TaskDescription1 />
        },
        {
            condition: taskId === "task2",
            component: <TaskDescription2 />
        },
        {
            condition: taskId === "task3",
            component: <TaskDescription3 />
        },
        {
            condition: taskId === "task4",
            component: <TaskDescription4 />
        },
        {
            condition: taskId === "task5",
            component: <TaskDescription5 />
        },
        {
            condition: taskId === "task6",
            component: <TaskDescription6 />
        },
        {
            condition: true,
            component: null
        }
    ]
    

   
    const componentToRender = taskComponents.find((component) => component.condition)?.component;

    useEffect(() => {
        if (!componentToRender) {
          navigate("/");
        }
      }, [componentToRender, navigate]);

  return componentToRender;   
}

const GoBackButton = () =>{
    const navigate = useNavigate();
    const handleButton = () => {
        navigate(-1)
    }
    return(
        <button className='button-arrow' onClick={handleButton}>
            {<img src={arrow} className='arrow'/>}
        </button>
    )
}
 

export default class RouterApp extends Component {
    render() {
        return <div>
            <div className='router-wrapper'>
                <div className='header-link'>
                    <Link to="/">Main</Link>
                </div>
                <div className='header-link'>
                    <Link to="/task1">Task_1 </Link>
                </div>  
                <div className='header-link'>
                    <Link to="/task2">Task_2</Link>
                </div>
                <div className='header-link'>
                    <Link to="/task3">Task_3</Link>
                </div>
                <div className='header-link'>
                    <Link to="/task5">Task_5</Link>
                </div>
                <div className='header-link'>
                    <Link to="/description">TaskDescription</Link>
                </div>
               <GoBackButton />
                
            </div>
            <Routes>
                <Route path="/" element={<Task_4 />} />
                <Route path="/task1" element={<Task_1 />} />
                <Route path="/task2" element={<Task_2 />} />
                <Route path="/task3" element={<Task_3 />} />
                <Route path="/task5" element={<Task_5 />} />
                <Route path="/description/*" element={<TaskDescription />}>
                    <Route path=":taskId" element={<TaskDescriptionId/>} />
                </Route>
            </Routes>
        </div>
    }
}