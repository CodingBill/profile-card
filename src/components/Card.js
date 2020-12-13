import React from 'react'
import Circle from './Circle'
import Profile from './Profile'
import Status from './Status'
import '../css/Card.css'

const Card = ({pic}) => {
    
    const att = {
        name: 'Victor Crest', 
        age: '26',
        address: 'London'
    }

    const stats = [
        {value: '80K', label:'Followers', prp:'box', id: 'box-1 Status'},
        {value: '803K', label:'Likes', prp:'box', id: 'box-2 Status'}, 
        {value: '1.4K', label:'Photos', prp:'box', id: 'box-3 Status'}

    ]
        

    return (
        <div className= "Card" >
            <Circle pic={pic} />
            <Profile name={att.name} age={att.age} add={att.address} />
            <div className="status-divs">
                {stats.map(stat => (
                    <Status value={stat.value} label={stat.label} id={stat.id} prp={stat.prp} />
                ))}
            </div>
        </div>
    )
}

export default Card
