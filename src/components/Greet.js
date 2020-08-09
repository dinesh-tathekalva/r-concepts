import React from 'react'

const Greet = ({name}) => {
   const handleClick = () => {
        console.log('clicked')
    }
    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Greet    