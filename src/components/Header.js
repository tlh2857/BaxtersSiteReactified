import React, {useState,useRef,useEffect} from 'react';
import Navbar from './maincontent/Navbar'; 
//import InViewport from './maincontent/InViewport';


const styles={
        rowA: {
            height:'6rem',
            backgroundColor:'#e2f8fe',
            borderBottom: '1px solid rgb(149, 149, 255)',
            borderTop: '1px solid rgb(149, 149, 255)',
        },
        appointmentAlert: {
            fontFamily: 'Questrial',
            fontSize:'1.5rem', 
            marginTop: '1rem',

        },
        title: {
            fontFamily: 'Cedarville Cursive',
            marginTop:'1rem',
            fontSize:'3rem',
        },
    };


function Header(props){
     const headerRef = useRef();

     function headerRefLogger(){
    console.log(Object.keys(headerRef.current.getBoundingClientRect()));
     }

     useEffect(() => {
    window.addEventListener("scroll", headerRefLogger, true);
    return () => {
      window.removeEventListener("scroll", headerRefLogger, true);
    };
  });

    const navbar = <Navbar setSection={props.setSection}/>;
    const appointmentAlert = <AppointmentAlert />
    const headerView = 1; //change this line to select the boudning client header ref 
    const navbarView = 1; //change this line to select the bounding client navbar ref
  
    

    return(
     
            <div ref={headerRef} className='row sticky-top justify-content-center justify-content-sm-center justify-content-md-between' style={styles.rowA}>
                <div className='col-4 col-sm-8 col-md-7 col-lg-7 col-xl-5 order-last ' style={styles.container}>
                    {true?appointmentAlert:navbar}
                </div>
                <div className='col-12 col-sm-4 col-lg-4'>
                    <h2 role='button' onClick={e=>{e.preventDefault();props.setSection('main')}} style={styles.title} className='text-center'>Baxter's Salon</h2>
                </div>
            </div>
      
    )
};


export default Header; 

 function AppointmentAlert(){
        return (
         <h4 style={styles.appointmentAlert} className='text-center'>For Appointments, call 512-983-6040</h4>
        )
 };