import React from 'react';
import { useForm} from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
    login: Yup.string().required('Field login needs to fill'),
    password: Yup.string().required('Field password needs to fill'),
    email: Yup.string().required('Field email needs to fill')
})

const ReactHookForm = () => {
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = ({login, password, email}) => {
        alert(`Name: ${login}, Surname: ${password}, Email: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Your login' {...register('login')}/>
            {errors.login && <div>{errors.login?.message}</div>}
            <input type='password' placeholder='Your password' {...register('password')} />
            {errors.password && <div>{errors.password?.message}</div>}
            <input type='email' placeholder='Your email' {...register('email')}/>
            {errors.email && <div>{errors.email?.message}</div>}
            <button type='submit'>Log IN</button>
        </form>
    )
}

export default ReactHookForm;