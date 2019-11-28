import React from 'react';
import Navbar from './maincontent/Navbar'; 

class Header extends React.Component{


  
    
  render(){
         const navbar = <Navbar />;
         const appointmentAlert = <AppointmentAlert />

    const styles={
        rowA:{
            height:'6rem',
            backgroundColor:'#e2f8fe',
            borderBottom: '1px solid rgb(149, 149, 255)',
            borderTop: '1px solid rgb(149, 149, 255);'
        },
        row:{

        },
    };

    
    

    return(
     
            <div className='row sticky-top justify-content-center justify-content-sm-center justify-content-md-between' style={styles.rowA}>
                <div className='col-4 col-sm-8 col-md-7 col-lg-6 col-xl-5 order-last' style={styles.container}>
                    {this.props.visibility==='top'?appointmentAlert:navbar}
                </div>
                <div className='col-12 col-sm-4 col-lg-4'>
                    <h2 className='text-center'>Baxter's Salon</h2>
                </div>
            </div>
      
    )
}
};

export default Header; 

 function AppointmentAlert(){
        return (
        <div className="col-12 col-sm-8 col-md-7">
         <h4 className='text-center'>For Appointments, call 512-983-6040</h4>
        </div>
        )
 };