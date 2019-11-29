import React from 'react'; 
export default Footer; 

const styles={
    footer: {
        height: '5rem', 
        backgroundColor:' #768694', 
        left: '0',
        bottom: '0',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontSize: '1.5rem',
        marginTop: '0.7rem',
    },
    text: {
        fontFamily: 'Cedarville Cursive',
        marginTop: '1.5rem',
    },
    a: {
        color: 'inherit',
    }
}

function Footer(props){
    return (
        <footer style={styles.footer} className='footer' name='bottom'>
            <div className='container-fluid'>
                <div  className='row'>
                    <div style={styles.text} id='footerContent' className='col-12'>
                        <a style={styles.a} href='https://www.facebook.com/pages/Baxters-Salon/105127349555023'>Facebook</a> | 
                        <a style={styles.a} href='https://www.yelp.com/biz/baxters-salon-plano'>Yelp</a> | 
                        <a style={styles.a} href='https://goo.gl/maps/nNXAxi1hbe4XX4WS9'>Directions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}