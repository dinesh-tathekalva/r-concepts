import React from 'react'

 function Persons({person}) {
    return (
        <div>
            <h2>I am {person.name}. I am {person.age} years old. I study {person.skill}</h2>
        </div>
    )
}

export default Persons