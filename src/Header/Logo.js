import React from 'react';
import ReactDeveloper from './ReactDeveloper';
import NikoLogo from './NikoLogo.svg';

const Logo = () => {
    return (
        <div className='Logo'>
          <img src={NikoLogo}/>
            <ReactDeveloper/>

        </div>
    );
};

export default Logo;