import React, { Component } from 'react'
import Square from '../Square/Square'
import '../css/Game.scss'
export default class Board extends Component {
pass(i){
    console.log(this.props.isnextRed)
    return <Square onClick={()=>this.props.onClick(i)} S_or_O={this.props.S_or_O} isnext={this.props.isnextRed} />
}
   render()
{
    return (
        
            <div className="outline">
          
          <div >    
         {this.pass(1)}
         {this.pass(2)}
         {this.pass(3)}
         
         
          </div>
          <div >    
          {this.pass(4)}
          {this.pass(5)}
          {this.pass(6)}
          
           </div>
          
           <div >    
           {this.pass(7)}
           {this.pass(8)}
           {this.pass(9)}
           
            </div>
            
      
            
        </div>
    )
}
}
