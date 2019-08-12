

import NikoLogo from './NikoLogo.svg';
import './Header.css';



import React, { Component } from 'react'

export default class ContactSection extends Component {


    render() {
        return (
            <div className='ContactSection'>

          
        
       <img src={NikoLogo}/>
       <p>Contact</p>
       <p>niko@niko.ge</p>
       <p>+995 595 773399</p>
       <p>68, Chubinashvili Str.,</p>
       <p>Tbilisi, 0112 Georgia</p>
       

            
        </div>
        )
    }
}



