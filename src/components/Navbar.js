import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import AboutUs from '../pages/AboutUs'

const Navbar = () => {
  return(
    <div className="topnav">
      <div className='topnav a'>
        <Link to="/">Home  <i className="fas fa-home"></i></Link>
          <Link to="/PubList">Pub List  <i className="fas fa-beer"></i></Link>
          <Link to="/AboutUs">Meet The Team  <i className="fas fa-glass-cheers"></i></Link>
      </div>
    </div>
  )
}

export default Navbar
