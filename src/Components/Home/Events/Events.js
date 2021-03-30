import React from 'react';

const Events = ({event}) => {
    
    return (
        <div>
            <h3>{event.name}</h3>
            <img src={event.pic} alt=""/>
        </div>
    );
};

export default Events;