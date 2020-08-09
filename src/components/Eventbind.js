import React, { Component } from 'react'

 class Eventbind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             flag : true,
             name: 'dinesh'
        }
    }
    
    clickHandler = () => {
        this.setState({
            flag : !this.state.flag 
        })
        
    }
   
    render() {
            const {flag, name} =this.state
        return (
            <div>
                <div>{name}</div>
                <div>{flag ? 'Welcome' : 'Hello'}</div> 
                <div><button onClick={this.clickHandler}>Click</button></div>
            </div>
        )
    }
}

export default Eventbind
