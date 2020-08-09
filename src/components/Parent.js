import React, { Component } from 'react'
import Child from './Child'
 class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent'
        }
    }
    

    greetMethodParent = child => alert(`Hello ${this.state.parentName}`)

    greetMethod = child => alert(`Hello ${this.state.parentName} from ${child}`)


    render() {
        return (
            <div>
                <button onClick={this.greetMethodParent}>Click Parent</button>
                <Child greeting = {this.greetMethod}/>
            </div>
        )
    }
}
export default Parent