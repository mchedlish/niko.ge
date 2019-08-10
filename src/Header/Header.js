
import Logo from './Logo';
import Contact from './Contact'
import ContactSection from './ContactSection'
import Close from './Close'


import React, { Component } from 'react'

export default class Header extends Component {

    state= {
visibility:'NotVisible'


    }

    componentDidUpdate () {
    if (this.state.visibility==="Fold") {

        setTimeout(() => {
            this.setState({visibility:"NotVisible"})
        }, 500);


    }

    }


    render() {

        
        return (
            <div className='Header'>
            <Logo/>
            <div onClick={()=>this.setState((prevState)=>({visibility:'ContactSection'}))}  >
            <Contact name="Contact"/>
            </div>
            <div className={this.state.visibility}>

            
            <div onClick={()=>this.setState((prevState)=>({visibility:'Fold'}))}>
            
            <Close/>
            </div>
            <ContactSection/>
            
            </div>
            
        </div>

       
        )
    }
}




