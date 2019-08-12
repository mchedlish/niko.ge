import React, { Component } from 'react'
import TextAbout from './TextAbout'
import AboutMe from './AboutMe'
import Description from './Description'

export default class Rectangle extends Component {
state = {
visibility:'',
description:'NotVisible'

}

    render() {
if (this.state.visibility=='NotVisible' && this.state.description=='Description') {
setTimeout (()=> this.setState({visibility:'', description:'NotVisible'}), 12000)

}

        return (
            <div className='Rectangle'>
            <div className={this.state.visibility}>
            <TextAbout/>
            <div onClick={handleVisibility=> {
                this.setState({visibility:'NotVisible', description:'Description'})


            }}>
            <AboutMe/>
            </div>
            </div>
            <div className={this.state.description}>
            <Description/>
</div>
            </div>
        )
    }
}
