import React from 'react';
import '../User.css';

const UserCard = ({name, surname, age}) => {
return(
    <div >
        <div className='User-info'>User information:</div>
        <div>Name: {name}</div>
        <div>Surname: {surname}</div>
        <div>Age: {age}</div>
    </div>
)
}

const UserCardText = (props) => {
    const {name, surname, age} = props;
    return (
    <div className='User-text'>
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
  
     return age < 18 ? children : adult;
  }

export class User extends React.Component {
    state = {
        name: 'Nikita',
        surname: 'Ivanov',
        age: '25',
    }
    render() {
        return(
            <div className='User'>
            <div className='task'>TASK 1</div>
            <UserCard {...this.state} />

            <UserCardText {...this.state} />
      
            <AgeOption age={this.state.age} name={this.state.name} />
            
            </div>
        )
    }
}