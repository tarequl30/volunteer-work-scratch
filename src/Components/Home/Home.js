import React, { useEffect, useState } from 'react';
import Events from './Events/Events';

const Home = () => {
    const events = [
        {
            name: 'child Support',
            pic : '../../images/animalShelter.png'
        },
        {
            name: 'child Support',
            pic : '../../images/animalShelter.png'
        },
        {
            name: 'child Support',
            pic : '../../images/animalShelter.png'
        },
        {
            name: 'child Support',
            pic : '../../images/animalShelter.png'
        }
    ];
    return (
        
        <div className="row">
           {
              events.map(user => <Events event={events}></Events>)
           }
        </div>
    );
};

export default Home;