import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'


const Home = () => {
  return(
    <div className="homePage">
      <Navbar/>
      <div class="plate">
    <p class="script"><span>State 2 State </span></p>
    <p class="shadow text1">PUB</p>
    <p class="shadow text2">2</p>
    <p class="shadow text3">PUB</p>
    // <p class="script"><span>Group 6</span></p>
  </div>
    </div>
  )
}

export default Home
