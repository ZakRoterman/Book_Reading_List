import React from 'react';
import * as Yup from "yup";
import { useFormik} from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';

const FormSchema = Yup.object(
    {
        email: Yup.string().email("Must be a valid email address").required(),
        password: Yup.string().required()
    }
);

const initialValues ={
    email: "",
    password: ""
};

export default function LoginForm() {
    const handleSubmit=(values)=>{
        console.log("logged in")
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            fullWidth
            id="email"
            name="email"
            sx={{mb:2, mt:2}}
            label="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}        
        />
        <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            sx={{mb:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}        
        />
        <Button type="submit" sx={{width:"100%"}}>Login</Button>
    </form>
  )
};