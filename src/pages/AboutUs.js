import React from 'react'
import Navbar from '../components/Navbar'
import './ddad.png'
import './AboutUs.css'


const AboutUs = () => {
    return (
      <div className="AboutUs">
        <Navbar/>
      <div>
        <h1 className="mofos">
            <p className="hone">Meet the Team.</p>
        </h1>
          <div className="div">

            <div className="dropdown">
              <img src="images/javi.jpg" alt="Cinque Terre" width="75" height="100"/>
              <div className="dropdown-content">
                <img src="images/javi.jpg" alt="team" width="300" height="350"/>
                <div className="desc">This is a representation of a person and where they are fomr!</div>
              </div>
            </div>

            <div className="dropdown">
             <img src="images/rocio.jpg" alt="Cinque Terre" width="75" height="100"/>
              <div className="dropdown-content">
              <img src="images/rocio.jpg" alt="team" width="300" height="350"/>
              <div className="desc">This is a representation of a person and where they are fomr!</div>
            </div>
          </div>

                      <div className="dropdown">
                      <img src="images/gina.jpg" alt="Cinque Terre" width="150" height="200"/>
                        <div className="dropdown-content">
                        <img src="images/gina.jpg" alt="team" width="300" height="350"/>
                            <div className="desc"> WOOF! WOOF! MOFOS!!</div>
                        </div>
                       </div>

                           <div className="dropdown">
                           <img src="images/simon.jpg" alt="Cinque Terre" width="75" height="100"/>
                             <div className="dropdown-content">
                             <img src="images/simon.jpg" alt="team" width="300" height="350"/>
                                 <div className="desc">This is a representation of a person and where they are fomr!</div>
                             </div>
                            </div>

                                <div className="dropdown">
                                <img src="images/thomas.jpg" alt="Cinque Terre" width="75" height="100"/>
                                  <div className="dropdown-content">
                                  <img src="images/thomas.jpg" alt="" width="300" height="350"/>
                                      <div className="desc">This is a representation of a person and where they are fomr!</div>
                                  </div>
                                 </div>
                                 </div>
       </div>
      </div>
    );
}

export default AboutUs;
