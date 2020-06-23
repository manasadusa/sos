import React, { Component } from 'react'
import Board from '../Board/Board'
import '../css/Game.scss'
import Square from '../Square/Square'

export default class Game extends Component {
constructor(){
    super();
    this.state={
        isnextRed:true,
        S_or_O:''
    }
}
   
 handleClick(e){
    
    var S_O=prompt("enter value");
    
    
        this.setState ({
            S_or_O:S_O,
          
            isnextRed:!this.state.isnextRed
            
         })
         
         
     
 } 
    render() {
        return (
          <Board onClick={()=>this.handleClick()} S_or_O={this.state.S_or_O} isnextRed={this.state.isnextRed}/>
              )
    }
}
