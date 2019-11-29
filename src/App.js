import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


const App = () => {
  const [section, setSection] = useState('main');
  const [navbarView, setNavbarView] = useState('');
        return(
            <div className='container-fluid'>
                <Header navbarView={setNavbarView} section={section} setSection={setSection}/>
                <MainContent setNavbarView={setNavbarView} section={section} setSection={setSection} />
                <Footer />
            </div>
        )
    }


export default App;
