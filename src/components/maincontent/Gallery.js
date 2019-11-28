import React from 'react';
export default Gallery; 

function Gallery(props){

    return (
        <div className='row text-center'>
        
            <div className="col-lg-4">
                <div className='card'><img className='img-fluid' src='/pictures/MarySidePortraitMedium43View.jpg' /></div>
            </div>
            <div className="col-lg-4">
                <div className='card'><img className='img-fluid' src='/pictures/Model43.jpg' /></div>
            </div>
            <div className="col-lg-4">
                <div className='card'><img className='img-fluid' src='/pictures/BaxtersBoutiqueTag43.jpg' /></div>
            </div>
        </div>
    )
};