import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <form className='registration_form'>
      <h1>Login</h1>
      <input type='email' placeholder='email' required/>
      <input type='password' placeholder='password' required/>
      <button type='submit'>login</button>
      <Link to='/register'><button>Back to login</button></Link>
    </form>
  )
}

export default Login
