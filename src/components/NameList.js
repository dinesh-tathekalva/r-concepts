import React from 'react'
import Persons from './Persons'

function NameList() {
    const persons = [
        {   
            id: 1,
            name: 'James',
            age: 28,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Christoph',
            age: 38,
            skill: 'Vue'
        },
        {
            id: 3,
            name: 'Nolan',
            age: 48,
            skill: 'Angular'
        }
    ]
    const personsMap = persons.map((person) => <Persons key={person.id} person={person}/>)
    return <div>{personsMap}</div>
    
}

export default NameList