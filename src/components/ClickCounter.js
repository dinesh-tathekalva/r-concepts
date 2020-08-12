import React, { Component, Fragment } from 'react'
import Counter from './Counter'

class ClickCounter extends Component {
   
    render() {
        const {count, incrementCount, name} = this.props
        return (
            <React.Fragment>
                 <button onClick={incrementCount}> {name} clicked {count} times </button>
            </React.Fragment>
            
        )
    }
}
export default Counter(ClickCounter, 5)