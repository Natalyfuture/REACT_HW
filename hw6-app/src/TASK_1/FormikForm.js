import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikForm = () => {

    const { handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
        },
        validationSchema : Yup.object({
            name: Yup.string().required('Name is required'),
            surname: Yup.string().min(3, 'Surname must be longer than 3 symbols').required('reuired field :)'),
            email: Yup.string().email('Invalid email').required('reuired field :)'),
        }),
        
        onSubmit: (values) => {                                                            
            alert(`Name: ${values.name}, Surname: ${values.surname}, Email: ${values.email}`);
        },
    });

    return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        name='name' 
        placeholder='Your name' 
        value={values.name} 
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.name && errors.name ? <div>{errors.name}</div> : null}
        <input 
        type='text' 
        name='surname' 
        placeholder='Your surname' 
        value={values.surname} 
        onChange={handleChange} 
        onBlur={handleBlur}
        />
        {touched.surname && errors.surname ? <div>{errors.surname}</div> : null}
        <input  
        name='email' 
        placeholder='Email'
        value={values.email} 
        onChange={handleChange} 
        onBlur={handleBlur}
        />
        {touched.email && errors.email ? <div>{errors.email}</div> : null}
        <button type='submit'>Submit</button>
    </form>
    )
}