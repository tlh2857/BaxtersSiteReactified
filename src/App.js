import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visibility:'top',
        };
    }
    render(){
        return(
            <div className='container-fluid'>
                <Header visibility={this.state.visibility}/>
                <MainContent />
                <Footer />
            </div>
        )
    }
}

export default App;
