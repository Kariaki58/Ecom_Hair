import React from 'react'
import '../styles/nav.css'
import '../index.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
     <Link to='/'><h1 className='logo'>Logo</h1></Link>
      <ul>
        <Link to='/login'><li>Login</li></Link>
        <Link to='/logout'><li>Logout</li></Link>
        <Link to='/orders'><li>Cart</li></Link>
        <Link to='/register'><li>Register</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
