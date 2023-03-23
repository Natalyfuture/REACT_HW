import React from 'react';
import './App.css';
import { User } from './Components/Task1/User';

const UserCardText = (props) => {
  const {name, surname, age} = props;
  return (
  <div>
    My info: {name}-{surname}-{age}
  </div>

  )
}

const AgeOption = ({age, name}) => {
  const children = `
  Hello, ${name}, I can't get you something to drink.
  `;
  const adult = `
  Hello, ${name}, I can get you something to drink.
  `;

  console.log(children)
  console.log(adult)
   return age < 18 ? children : adult;
}



export default class App extends React.Component {
  state = {
    name: 'Veronika',
    surname: 'Ignatova',
    age: '26',
  }
  render(){
    return(
      <>
      <User />
      
      <UserCardText {...this.state} />
      
      <AgeOption age={this.state.age} name={this.state.name} />
      
      </>
     
      
      
    )
  }
  
}


