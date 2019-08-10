
import React, { Component } from 'react'
import ReactPlayer from 'react-player'




export default class Niko extends Component {
    render() {
        return (
            <div className='Niko'>
           
           
           <ReactPlayer 
           className='react-player'
           url='https://mchedlish.wistia.com/medias/kor3rd5ec8' 
           playing 
           loop={true} width='100%' height='100%'/>
                
            
        
            
          
           
     </div>
            )
    }
}


