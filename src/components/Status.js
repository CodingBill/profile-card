import React from 'react'
import '../css/Status.css'

const Status = ({value, label, prp, id}) => {
    return (
        <div className={id}>
            <div className={prp}>
                <p> <span className="big-weight">{value}</span> <br/>
                {label}</p>
            </div>
        </div>
    )
};

export default Status
