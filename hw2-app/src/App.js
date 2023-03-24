import React from 'react';
import './App.css';
import { User } from './Components/Task1/User';
import { Form } from './Components/Task2/Form';
import { LifeCycle } from './Components/Task3/Lifecycle';
/* import { BrowserRouter} from 'react-router-dom';  */





export default class App extends React.Component {
 
  render(){
    return(
      
      <>
      <User />
      <Form />
      <LifeCycle />
    
      </>
      
    )
  }
  
}


