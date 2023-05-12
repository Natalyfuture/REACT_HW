import React from 'react';
import Grapes from '../assets/images/grapes.png';
import Leaf from '../assets/images/leaf.png';
import Orange from '../assets/icons/orange.svg';
import BittenApple from '../assets/icons/bitten-apple.svg';
import DroolingSmile from '../assets/images/drooling-face-emoji.png'
import { useFormik } from 'formik';

import { Input } from './Input';


import '../css/main.css';

const Register = () => {
    const{ handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            login: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: (values) => {
                console.log(values)
        }
    })

    const inputData = ['login', 'password', 'confirmPassword']

    return( 
        <section className='login'>
        <div className='login_container'>
            <img className='img_grapes' src={Grapes} alt='grapes' />
            <img className='img_leaf' src={Leaf} alt='leaf' />
            <img className='img_orange' src={Orange} alt='Orange' />
            <img className='img_bitten-apple' src={BittenApple} alt='BittenApple' />
            <div className='title_wrapper'>
                <h1 className='title'>Welcome To 
                    Yelp App
                </h1>
                <img className='title_drooling-face' src={DroolingSmile} alt='DroolingSmile' />
            </div>
           

            <form className='form' onSubmit={handleSubmit}>
                <div className='form_container'>
                        {inputData.map((item => (
                            <Input key={item} name={item} value={values[item]} handleChange={handleChange}/>
                        )))}
                    <div className='button_container'>
                    <button className='button'>Register</button>
                    </div>
                </div>
                
            </form>   
        </div>
    </section>
    )
}

export default Register;