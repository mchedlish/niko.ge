import React, { Component } from 'react'

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Nikosvg from '../Body/Nikosvg'
import NikoLogo from './NikoLogo.svg';

export default class FlipApp extends Component {
    render() {
        return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
      >
        <FrontSide>
          <img src={NikoLogo}/>
        </FrontSide>
        <BackSide>
          <Nikosvg/>
          

        </BackSide>
      </Flippy>)
    }
}
