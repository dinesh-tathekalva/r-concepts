import React from 'react'
import './Style.css'

function Styletest(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={className}> Hello Styles</h1>
            
        </div>
    )
}

export default Styletest