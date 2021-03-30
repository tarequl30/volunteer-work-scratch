import React from 'react';

const Events = (props) => {
    const {name, pic} = props.event;
    return (
        <div style={{width: '100%'}}>
            <h3>{name}</h3>
            <img src={pic} alt="" width="50%"/> <br/>
            <button>Buy Now</button>
        </div>
    );
};

export default Events;