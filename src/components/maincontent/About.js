import React from 'react';

const people = [
    {
        src: 'pictures/Model43.jpg',
        name: 'Alex',
        text: `Meet Alex. She's been with Baxters for 2 years. She's currently in beauty school.`,
    },
    {
        src: 'pictures/katiesPics/shopBack43new.jpg',
        name: `Salon Area`,
        text: `Here's where the magic happens. Each day, your hair cut takes a wonderful journey to beauty.`,
    },
    {
        src: `pictures/MarySidePortraitMedium43View.jpg`,
        name: `Mary`,
        text: `Here's Mary. She founded Baxter's in 1989. She's the only expert you need for your hair.`,
    },
];

const styles={
    cards:{
        paddingBottom:'1rem',
        margin: '1rem',

    }
}

function cardGenerator(peopleArray){
    for(let card of peopleArray){
        
    }
}
const About = (props) => {
    return(
        <div  className='row justify-content-center'>
                    {people.map((card)=>{
                        return (
                            <div key={card.name} className='col-xs-1 col-sm-3 col-md-4 col-lg-5 col-xl-5'>
                            <div styles={styles.cards} className="card">
                                <img src={card.src} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{card.name}</h5>
                                    <p className="card-text">{card.text}</p>
                                </div>
                            </div>
                        </div>
                        )})}
            </div>
                        
    )
}

export default About;