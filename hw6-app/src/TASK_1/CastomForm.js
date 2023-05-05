import React, { useState } from 'react';

export const CastomForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleInputName = (e) => {
        setName(e.target.value);
    };

    const handleInputSurname = (e) => {
        setSurname(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Surname: ${surname}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Your name' value={name} onChange={handleInputName} />
            <input type='text' name='surname' placeholder='Your surname' value={surname} onChange={handleInputSurname}/ >
            <button type='submit'>Submit</button>
        </form>
    )
}