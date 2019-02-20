import React from 'react'
import Navbar from '../components/Navbar'
import './ddad.png'
import './AboutUs.css'


const AboutUs = () => {
    return (
      <div className="AboutUs">
        <Navbar/>
      <div>

            <h1 className="usTitle">Meet the Team.</h1>

          <div className="div">

            <div className="dropdown">
              <img src="images/javi.jpg" alt="Cinque Terre" width="75" height="100"/>
              <div className="dropdown-content">
                <img src="images/javi.jpg" alt="team" width="300" height="350"/>
                <div className="desc">
                <h2>Javier Mesa</h2>
                <p>Miami, FL.</p>
                <p>Business Management</p>
                </div>
              </div>
            </div>

            <div className="dropdown">
             <img src="images/rocio.jpg" alt="Cinque Terre" width="75" height="100"/>
              <div className="dropdown-content">
              <img src="images/rocio.jpg" alt="team" width="300" height="350"/>
              <div className="desc">
              <h2>Rocio De Santiago</h2>
              <p>Chicago, IL.</p>
              <p>U.S. Marine Admin</p>
            </div>
            </div>
          </div>

                      <div className="dropdown">
                      <img src="images/gina.jpg" alt="Cinque Terre" width="125" height="175"/>
                        <div className="dropdown-content">
                        <img src="images/gina.jpg" alt="team" width="300" height="350"/>
                            <div className="desc">
                              <h2>Gina</h2>
                              <p>Russia</p>
                              <p>Pastime: Sled pulling</p>
                            </div>
                        </div>
                       </div>

                           <div className="dropdown">
                           <img src="images/simon.jpg" alt="Cinque Terre" width="75" height="100"/>
                             <div className="dropdown-content">
                             <img src="images/simon.jpg" alt="team" width="300" height="350"/>
                                 <div className="desc">
                                 <h2>Simon Choren</h2>
                                 <p>Miami, Fl.</p>
                                 <p>Sales/Call Center</p>
                                 </div>
                             </div>
                            </div>

                                <div className="dropdown">
                                <img src="images/thomas.jpg" alt="Cinque Terre" width="75" height="100"/>
                                  <div className="dropdown-content">
                                  <img src="images/thomas.jpg" alt="" width="300" height="350"/>
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
