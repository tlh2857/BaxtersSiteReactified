import React from 'react';
export default Navbar; 
function Navbar(props){
    return(
                 <div className='row justify-content-center'>
                        <div className='col-xs-12 col-sm-8 col-md-6 col-lg-5'>
                              <nav id='nonMainNavbarButton' className="navbar navbar-expand-sm navbar-light">
                                  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                  </button>
                                  <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                                    <div id='nonMainNavbar' className="navbar-nav">
                                      <a className="navbar-brand nav-item nav-link " href="about.html"><h3 id='headerNonMainNavbar'>About</h3><span className="sr-only">(current)</span></a>
                                      <a className="navbar-brand nav-item nav-link" href="services.html"><h3>Services</h3></a>
                                      <a className="navbar-brand nav-item nav-link" href="scheduling.html"><h3>Schedule</h3></a>
                                    </div>
                                  </div>
                                </nav>
                        </div>
                 </div>
    )
}