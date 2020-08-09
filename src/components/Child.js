import React from 'react'

const Child = (props) => {
    return (
        <div>
            {/* {props.greetMethod} from Child */}
            <button onClick={()=>props.greeting('child')}>click Child</button>
        </div>
    )
}
export default Child