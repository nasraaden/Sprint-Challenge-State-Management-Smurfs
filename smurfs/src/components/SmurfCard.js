import React from "react"

const SmurfCard = props => {
    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <p>{`Age: ${props.smurf.age}yrs`}</p>
            <p>{`Height: ${props.smurf.height}`}</p>
        </div>
    )
}

export default SmurfCard;