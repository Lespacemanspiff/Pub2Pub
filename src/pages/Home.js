import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'

const Home = () => {
  return(
    <div className="homePage">
      <Navbar/>
      <div className="plate">
        <p className="script"><span>State 2 State </span></p>
        <p className="shadow text1">PUB</p>
        <p className="shadow text2">2</p>
        <p className="shadow text3">PUB</p>
        <p className="script"><span>Cheers!</span></p>
      </div>
    </div>
  )
}

export default Home;