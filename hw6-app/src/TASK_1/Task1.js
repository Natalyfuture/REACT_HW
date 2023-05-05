import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Routes, Route } from 'react-router-dom';

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