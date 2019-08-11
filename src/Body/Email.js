import React from 'react';
import RubberBand from 'react-reveal/RubberBand';


const Email= () => {
const style= {

textAlign:'center',
fontWeight:500,
fontSize: 26,
letterSpacing: 2.93,
color: '#ffffff'



}

    return (
        <div style={style} className='Email'>
        <RubberBand count='1' delay={2000}>
            <p>niko@niko.ge</p>
            </RubberBand>
        </div>
    );
};

export default Email;