import React from 'react'
import "../css/contact.css"
import { Field, Formik } from 'formik'
import * as Yup from 'yup'


const Contact = () => {

  const handleSubmit = (e) => {
    alert("Your request has been received. We will get back to you shortly.")
  }

  const contact = Yup.object().shape({
    username : Yup.string()
    .required("username cannot be empty"),

    email : Yup.string()
    .email("Please enter a valid email address")
    .required("email cannot be empty"),

    password : Yup.string()
    .min("8, can be at least 8 characters")
    .max("16, can be up to 16 characters")
    .required("password cannot be empty")
    .matches(/\d+/, "password must contain numbers")
    .matches(/[A-Z]+/, "must contain at least one uppercase letter")
    .matches(/[a-z]+/, "must contain at least one lowercase letter")
    .matches(/[!+#$%&?*/]/, "must contain at least one special characters")
  })


  return (
    <Formik
    initialValues = {{username: "" ,email: "" ,password: "" }}
    validationSchema={contact}
    onSubmit={(values, actions) => {
      alert(`username : ${values.username} email : ${values.email} password : ${values.password} `);
      actions.resetForm();
      actions.setSubmitting(false)
    }}
    > 
    
    {({values, handleChange, errors, touched, handleBlur}) => (
        <form className='form' onSubmit={handleSubmit}>
        <h1 className='-contact-title'>Contact Form</h1>
      
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Field
          name="username"
          type="name" 
          placeholder="Enter your username"
          id="exampleInputUsername1"
          value = {values.username}
          onChange = {handleChange}
          onBlur = {handleBlur}
          /> 
          {touched.username && errors.username && <div className="error text-danger">{errors.username}</div>}
        </div>
      
        <div className="form-group"> 
          <label htmlFor="email">Email</label>
          <Field 
          name="email"
          type="email"
          placeholder="Enter your email"
          value = {values.email}
          onChange = {handleChange}
          onBlur = {handleBlur}
          /> 
          {touched.username && errors.username && <div className="error text-danger">{errors.email}</div>}
        </div>
      
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field 
          name="password"
          type="" 
          id="exampleInputPassword1" 
          placeholder="Enter your password" 
          value = {values.password}
          onChange = {handleChange}
          onBlur = {handleBlur}
          /> 
          {touched.username && errors.username && <div className="error text-danger">{errors.password}</div>}
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )}
</Formik>
    
  )
}

export default Contact