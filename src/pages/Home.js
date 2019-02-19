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

export default Home

// <div className="titlePage">
//   <h1 className="move1">On the Road to the next Pub</h1>
//     <p className="move2"> State to State </p>
//     <img className="move4"src={require('../media/javibeer.png')} width='200px' height='135px'/>
//     <img className="ddad" src={require('../media/ddad.png')} width='200px' height='135px'/>
//
//     <p className="move3"> Pub to Pub </p>
// </div>
