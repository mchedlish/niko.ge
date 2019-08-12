import React from 'react';
import ReactDeveloper from './ReactDeveloper';
import NikoLogo from './NikoLogo.svg';
import 'hover.css'


const Logo = () => {
    return (
        <div className='Logo'>
         <img src={NikoLogo}  onClick={()=>window.location.reload()} className="hvr-wobble-skew"/>
            <ReactDeveloper/>

        </div>
    );
};

export default Logo;