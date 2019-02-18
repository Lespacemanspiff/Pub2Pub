import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'


const Home = () => {
  return(
    <div className="homePage">
      <Navbar/>
      <div className="titlePage">
        <h1>On the Road to the next Pub</h1>
          <p> State to State </p>
          <p> Pub to Pub </p>
      </div>
    </div>
  )
}

export default Home
