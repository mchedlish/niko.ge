import React from 'react';


const Contact = (props) => {
    return (
        <div className="Contact">
            <p>{props.name}</p>
            <div className='contactCircle'></div>
            <div className='contactRectangle'></div>
           
            
        </div>
    );
};

export default Contact;