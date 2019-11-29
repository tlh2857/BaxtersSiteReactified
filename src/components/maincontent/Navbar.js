import React, {useState} from 'react';
export default Navbar; 

const styles = {
  mainStyles: {
    miWidth: 'min-content',
    fontFamily: 'Questrial',
    color: '#117a8b',
  }
}



function Navbar(props){
    return(
            <div className='row justify-content-center'>
                  <div className='col-xs-12 col-sm-8 col-md-6 col-lg-5'>
                        <nav className="navbar navbar-expand-sm navbar-light">
                            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center">
                              <div className="navbar-nav">
                                <a className="navbar-brand nav-item nav-link " href="#">
                                  <h3 onClick={(e)=>{e.preventDefault();props.setSection('about')}}style={styles.mainStyles} >About</h3><span className="sr-only">(current)</span></a>
                                <a className="navbar-brand nav-item nav-link" href="#">
                                  <h3 onClick={(e)=>{e.preventDefault();props.setSection('services')}} style={styles.mainStyles} >Services</h3></a>
                                <a className="navbar-brand nav-item nav-link" href="#">
                                  <h3 onClick={(e)=>{e.preventDefault();props.setSection('scheduling')}} style={styles.mainStyles}>Schedule</h3></a>
                              </div>
                            </div>
                          </nav>
                  </div>
            </div>
    )
}