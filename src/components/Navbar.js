import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return(
    <div className="topnav">
      <div className='topnav a'>
        <Link to="/">Home</Link>  <Link to="/PubList">Pub List</Link>
      </div>
    </div>
  )
}

export default Navbar
