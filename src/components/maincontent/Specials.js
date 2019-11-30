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
    return (
           <div style={styles.row} className='row justify-content-center text-center'>
                <div className='col-6' >
                  <h3 style={styles.font}>Christmas is right around the corner. See our specials</h3>
                </div>  
                                   
            </div>  
    )
};