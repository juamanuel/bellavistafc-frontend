import React from 'react'
import '../../css/goal.scss'

function Goal (props){
    return(
        <div className="goalContainer">
            <div className="goalImage">
                <img className="player" src={props.avatar} alt="Player"/>
                <p className="goalName">{props.name}</p>
            </div>
            <div className="goalNumber">
                <p className="number">{props.numberGoals}</p><p>GOLES</p>
            </div>
        </div>
    )
}

export default Goal