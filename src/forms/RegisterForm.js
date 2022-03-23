import React, { useContext } from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from "../components/Button";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import useEditUser from '../hooks/useEditUser';
import useDeleteUser from '../hooks/useDeleteUser';
import {AppContext} from '../context/AppContext';

const FormSchema = Yup.object({
    "firstName":Yup.string().required("Required"),
    "lastName":Yup.string().required("Required"),
    "email": Yup.string().email("Must be a valid email address").required(),
    "password": Yup.string().required("Required")
})

export default function RegisterForm() {
    const {user} = useContext(AppContext)
    const [editUser, setEditUser] = useState({})
    const [deleteUser, setDeleteUser] = useState({})
    useEditUser(editUser)
    useDeleteUser(deleteUser)

    const initialValues={
        firstName:user?.firstName ?? '',
        lastName:user?.lastName ?? '',
        email:user?.email ?? '',
        password:user?.password ?? ''        
    }

    const handleSubmit =(values,resetForm)=>{
        console.log(values)
        if(!user){
            console.log("User has been successfully created.")
        }else{
            setEditUser({...values, id:user.id})
        }
        resetForm(initialValues);
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true

    })

    const handleDelete=()=>{
        setDeleteUser(user)
    }

  return (
    <form onSubmit={formik.handleSubmit}>
    <TextField
        fullWidth
        id="firstName"
        name="firstName"
        type="text"
        sx={{ mb: 2, mt: 2 }}
        label="First Name"
        placeholder="First Name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
    />
    <TextField
        fullWidth
        id="lastName"
        name="lastName"
        sx={{mb: 2 }}
        type="text"
        label="Last Name"
        placeholder="Last Name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
    />
    <TextField
            fullWidth
            id="email"
            name="email"
            sx={{mb:2, mt:2}}
            label="email"
            placeholder="Email"
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
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}        
        />

<Button type="submit" sx={{ width: "100%", my:1 }}>Submit</Button>
<Button color="error" onClick={()=>handleDelete()}  sx={{width:"100%", my:1}}>Delete User</Button>

</form>
  )
}