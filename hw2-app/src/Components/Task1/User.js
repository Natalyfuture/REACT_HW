import React from 'react';
import '../../index.css';

const UserCard = ({name, surname, age}) => {
return(
    <div>
        <div>User information:</div>
        <div>Name: {name}</div>
        <div>Surname: {surname}</div>
        <div>Age: {age}</div>
    </div>
)
}

export class User extends React.Component {
    state = {
        name: 'Nikita',
        surname: 'Ivanov',
        age: '25',
    }
    render() {
        return(
            <>
            <div>TASK 1</div>
            <UserCard {...this.state} />
            
            </>
        )
    }
}