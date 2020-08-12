import React, { Component } from 'react'
import Counter from './Counter'

class HoverCounter extends Component {

    
    
    render() {
        const {count, incrementCount} = this.props
        return (
            <React.Fragment>
               <h1 onMouseOver = {incrementCount}> Hovered {count} times</h1> 
            </React.Fragment>

        )
    }
}

export default Counter(HoverCounter, 1)