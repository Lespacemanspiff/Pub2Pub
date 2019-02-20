import React from 'react'
import Navbar from '../components/Navbar'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <Navbar/>
    <div>
      <h1 className="usTitle">Meet the Team</h1>
        <div className="div">

          <div className="dropdown">
            <img src="images/javi1.jpg" alt="Cinque Terre" width="150" height="200" className="main-image"/>
              <div className="dropdown-content">
              <img src="images/javi2.jpg" alt="team" width="200" height="250"/>
                <div className="desc">
                  <h2>Javier Mesa</h2>
                  <p>Miami, FL.</p>
                  <p>Business Management</p>
                </div>
              </div>
          </div>

          <div className="dropdown">
            <img src="images/rocio1.jpg" alt="Cinque Terre" width="150" height="200" className="main-image"/>
              <div className="dropdown-content">
              <img src="images/rocio2.jpg" alt="team" width="200" height="250"/>
                <div className="desc">
                  <h2>Rocio De Santiago</h2>
                  <p>Chicago, IL.</p>
                  <p>U.S. Marine Admin</p>
                </div>
              </div>
          </div>

          <div className="dropdown">
          <img src="images/gina1.jpg" alt="Cinque Terre" width="175" height="225" className="main-image"/>
            <div className="dropdown-content">
            <img src="images/gina2.jpg" alt="team" width="200" height="250"/>
              <div className="desc">
                <h2>Gina</h2>
                <p>Russia</p>
                <p>Pastime: Sled pulling</p>
              </div>
            </div>
          </div>

          <div className="dropdown">
          <img src="images/simon1.jpg" alt="Cinque Terre" width="150" height="200" className="main-image"/>
            <div className="dropdown-content">
            <img src="images/simon2.jpg" alt="team" width="200" height="250"/>
              <div className="desc">
                <h2>Simon Choren</h2>
                <p>Miami, Fl.</p>
                <p>Sales/Call Center</p>
              </div>
            </div>
          </div>

          <div className="dropdown">
          <img src="images/thomas1.jpg" alt="Cinque Terre" width="150" height="200" className="main-image"/>
            <div className="dropdown-content">
            <img src="images/thomas2.jpg" alt="" width="200" height="250"/>
              <div className="desc">
                <h2>Thomas Kennedy</h2>
                <p>Hollywood, Fl.</p>
                <p>Program Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
