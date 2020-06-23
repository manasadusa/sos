import React, { Component } from 'react'
import '../css/Game.scss'
export default class Square extends Component {
 constructor(props){
     super(props);
     this.state={
         com:[
           [1,2,3],
           [4,5,6],
           [7,8,9]
             
         ]
        

     }
     
     
 }
   

    render() {
 
     
          
        return (
            
                 <div className="square"  onClick={this.props.onClick}>
                     
                    <div style={{color:(this.props.isnext)?"red":"blue"}}>{ this.props.S_or_O}</div>    
                    
                       
                </div>
            
        )
        
    }
}
