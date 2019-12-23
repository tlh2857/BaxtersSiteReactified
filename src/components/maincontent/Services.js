import React from 'react';

const services = [
    {title:'Adult Cut',
    description:'Need a quick cut? This is the one for you.',
    cost:'$20'},
    {title:'Cut and Shampoo',
    description:' This cut includes a shampoo service with some of our favorite professional products.',
    cost:'$30'},
    {title:'Cut and Style',
    description:'Take on the world after this quick cut and styling',
    cost:'$30'},
    {title:`Kid's Cut`,
    description:'For ages 12 and under. No laughing gas required!',
    cost:'$15'},
    {title:'Band and Beard Trims',
    description:'Getting a shaggy face? We can help with that.',
    cost:'$10'},
    {title:'Highlights',
    description:`Don't like your hair color? We can highlight your hair in mini, partial, full, or cap sizes.`,
    cost:'$40-$150'},
    {title:'Permanant Coloring',
    description:'Is your hair gray? This will fix that so you can look younger!',
    cost:'$100'},
    {title:'Brow Wax',
    description:'This will help your unibrow look better.',
    cost:'$7'},
    {title:'Facial Wax',
    description:'Do you have facial hair that looks bad? This will take it off.',
    cost:'$10'},
    {title:'Perms',
    description:'This is when we put wrinkles in your hair if it is too straight.',
    cost:'$125'},
]

const Services = (props) => {
    return(
        <div className='col-6 text-center offset-3'>
        {services.map((service=>{
            return(<div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <p><b>{service.cost}</b></p>
            </div>)
        }))}
        </div>
    )
}

export default Services;
