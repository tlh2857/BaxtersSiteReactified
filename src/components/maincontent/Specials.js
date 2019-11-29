import React,{useState} from 'react'; //delte ,{useState}
export default Specials; 

const styles={
  font: {
    fontFamily: 'Mountains of Christmas',
    color: 'red',
  },
  row: {
    backgroundColor:'#ff00001a',
    marginTop: '1rem',
    marginBottom: '1rem',
  }
}

function Specials(props){
    const [section, setSection] = useState('main');//delete this
    return (
           <div style={styles.row} className='row justify-content-center text-center'>
                <div className='col-6' >
                  <h3 style={styles.font}>Christmas is right around the corner. See our specials</h3>
                </div>  
                <a className="navbar-brand nav-item nav-link " href="about.html"> //delte this
                                        <h3 onClick={(e)=>{e.preventDefault();setSection('specials')}}style={styles.mainStyles} >About</h3><span className="sr-only">(current)</span></a>//delete this
                                       
            </div>  
    )
};