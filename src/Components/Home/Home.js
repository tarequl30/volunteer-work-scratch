import React, { useEffect, useState } from 'react';
import Events from './Events/Events';
import image from '../../images/animalShelter.png'
import './Home.css'

const Home = () => {
    const events = [
        {
            name: 'child Support',
            pic : image
        },
        {
            name: 'child Support',
            pic : image
        },
        {
            name: 'child Support',
            pic : image
        },
        {
            name: 'child Support',
            pic : image
        }
    ];
    return (
        
        <div className="row">
           {
              events.map(events => <Events event={events}></Events>)
           }
        </div>
    );
};

export default Home;