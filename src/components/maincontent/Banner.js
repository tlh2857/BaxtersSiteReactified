import React from 'react';
export default Banner; 

const styles = {
    row: {
        height:'auto',
        padding: '-1rem 1rem 1rem 1rem',
        backgroundColor:'#5cffff17',
        fontFamily: `'Bebas Neue', 'Cedarville', cursive',`,

    }
    
}

function Banner(props){
    return(
        <div className='row'>
            <div style={styles.row} className='col-12 text-center'>
                <h1>Come for your hair, stay for the wine</h1>
                <h3>Voted best hair salon in downtown Plano</h3>
                <h3></h3>
            </div>
        </div>
    )
}

