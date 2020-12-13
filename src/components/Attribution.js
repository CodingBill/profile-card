import React from 'react'
import '../css/Attribute.css'

const Attribution = ({yt, ft}) => {
    return (
        <div className="attribute">
            Challenge by <a href={yt}>Frontend Mentor</a>.<br/> Coded by CodeBill <br/>checkout my journey <a href={ft}>here</a>.
        </div>
    )
}



export default Attribution
