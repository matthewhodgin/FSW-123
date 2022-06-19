import React, {Component} from 'react'
import './Dice.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{ faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

class Die extends Component{
render(){
    const {face, rolling} = this.props
      
    // Using font awesome icon to show
    // the exactnumber of dots
    return (
            <div>
                <FontAwesomeIcon icon= { 
                face == "one"?faDiceOne: 
                face == "two"?faDiceTwo: 
                face == "three"?faDiceThree: 
                face == "four"?faDiceFour: 
                face == "five"?faDiceFive: 
                face == "six"?faDiceSix: 
                ""
                }
                style={{
                    width:275,
                    height:200,
                    color:"blue"
                }}
                />
            </div >
        )
}
}
  
export default Die