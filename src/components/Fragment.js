import React, { Component } from 'react'

class Fragment extends Component {
    render() {
        return (
            <React.Fragment> {/* or can use empty tags <> but cannot pass key attribute in the empty tag*/}
                <h1>Welcome Fragment</h1>
                <p>This is fragment section</p>
                 {/* or can use empty tags </> */}
            </React.Fragment>
            
        )
    }
}
export default Fragment 