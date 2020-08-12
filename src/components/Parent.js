import React, { Component } from 'react'
import Child from './Child'
 class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent',
             topic: 'React'
        }
    }
    

    // greetMethodParent = child => alert(`Hello ${this.state.parentName}`)

    // greetMethod = child => alert(`Hello ${this.state.parentName} from ${child}`)
    
    handleTopic = event => {this.setState({topic: event.target.value})}


    render() {
        return (
            <div>
                {/* <button onClick={this.greetMethodParent}>Click Parent</button>
                <Child greeting = {this.greetMethod}/> */}
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option>React</option>
                    <option>AngularAngular</option>
                    <option>Vue</option>
                </select>
            </div>
        )
    }
}
export default Parent