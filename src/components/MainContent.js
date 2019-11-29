import React from 'react';
import Banner from './maincontent/Banner';
import Navbar from './maincontent/Navbar';
import Main from './maincontent/Main';
import About from './maincontent/About';
import Services from './maincontent/Services';
import Scheduling from './maincontent/Scheduling';

export default MainContent; 

function sectionTester(section){
    switch(section){
        case 'main':
        return <Main />;
        break;
         case 'about':
        return <About />;
        break;
         case 'services':
        return <Services />;
        break;
         case 'scheduling':
        return <Scheduling />;
        break;

    }
}
function MainContent(props){
    
        
    return(
        <div>
            <Banner />
            <Navbar section={props.section} setSection={props.setSection} />
            {sectionTester(props.section)}
            </div>
    )
}

 /*{props.section==='main'?<Main />
            :"about"?<About />
            :"services"?<Services />
            :<Scheduling />} */
            