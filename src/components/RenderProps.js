import React, { Component } from 'react'

class RenderProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             flag: false,
             status: 'Log In'
        }
    }

    handleClick = () => {
        this.setState({
            flag: !this.state.flag,
            status: this.state.flag ? 'Log In' : 'Log Off'
        })
    }

    render(props) {
        const {name} =this.props
        // const {status} = this.state.status
        return (
            <div>
                {this.state.flag ? 'Dinesh' : 'Guest'}
                <hr />
                <button onClick={this.handleClick}>{this.state.status}</button>
            </div>
        )
    }
}

export default RenderProps
