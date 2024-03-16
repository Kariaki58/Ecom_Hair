import React from 'react'
import '../styles/Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <form className='registration_form'>
      <h1>Create Account</h1>
      <input type='text' placeholder='fullname' required/>
      <input type='email' placeholder='email' required/>
      <input type='password' placeholder='password' required/>
      <input type='password' placeholder='retype password' required/>
      <button type='submit'>create account</button>
      <Link to='/login'>Back to login</Link>
    </form>
  )
}

export default Register
