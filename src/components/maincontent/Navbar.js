import React, {useState, useRef, useEffect} from 'react';
export default Navbar; 

let styles = {
  mainStyles: {
    minWidth: 'min-content',
    fontFamily: 'Questrial',
    color: '#117a8b',
    marginTop: '1rem',
   
  },
  headerStyles:{
            fontFamily: 'Questrial',
            fontSize:'1.5rem', 
            marginTop: '1rem',
            marginLeft:'-1rem',
            color:'black',
  },
}




  function styler(props){
    if(props.setNavbarView){
      return styles.mainStyles;
    } else return styles.headerStyles;
  }



function Navbar(props){
     const navbarRef = useRef();
  
     function isInView(){
        try{return props.setNavbarView(navbarRef.current.getBoundingClientRect()['bottom'])}
        catch(error){};
      }
      
     useEffect(() => {
    window.addEventListener("scroll",isInView, true);
    return () => {
      try{return window.removeEventListener("scroll", props.setNavbarView(navbarRef.current.getBoundingClientRect()['bottom']), true);}
      catch(error){};
   } 
    }
  );


    return(
            <div ref={navbarRef} className='row justify-content-center'>
                  <div className='col-xs-12 col-sm-8 col-md-6 col-lg-5'>
                        <nav className="navbar navbar-expand-sm navbar-light">
                            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center">
                              <div className="navbar-nav">
                                <a className="navbar-brand nav-item nav-link " href="#">
                                  <h3 onClick={(e)=>{e.preventDefault();props.setSection('about')}}style={styler(props)} >About</h3><span className="sr-only">(current)</span></a>
                                <a className="navbar-brand nav-item nav-link" href="#">
                                  <h3 onClick={(e)=>{e.preventDefault();props.setSection('services')}} style={styler(props)} >Services</h3></a>
                                <a className="navbar-brand nav-item nav-link" href="#">
                                  <h3 onClick={(e)=>{e.preventDefault();props.setSection('scheduling')}} style={styler(props)}>Schedule</h3></a>
                              </div>
                            </div>
                          </nav>
                  </div>
            </div>
    )
}