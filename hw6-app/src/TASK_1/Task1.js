import React from 'react';
import {CastomForm} from './CastomForm';
import { FormikForm } from './FormikForm';
import ReactHookForm from './ReactHookForm';

const Task1 = () => {
   return(
    <>
        <CastomForm />
        <FormikForm />
        <ReactHookForm />
    </>
   )               
}

export default Task1