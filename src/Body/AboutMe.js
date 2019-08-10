import React, { Component } from 'react'
import BoxAbout from './BoxAbout.svg'
import { NONAME } from 'dns';
export default class AboutMe extends Component {


    render() {



        return (
            <div className="AboutMe">
                    <img src ={BoxAbout}/>
                    <div className='Line'></div>
                    <p> About Me</p>
                    
                    
                </div>
        )
    }
}




