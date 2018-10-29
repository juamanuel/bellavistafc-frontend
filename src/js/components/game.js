import React from 'react'
import '../../css/game.scss'
const Game =(props) => (
    <div className="Game">
    <div className="MatchNumber"><p className="TextMatchNumber">JORNADA {props.matchNumber}</p></div>
     <div className="Results">
        <div className="Team"><img src={props.localShield}  height="50" width="40"/></div>
        <div className="Number"><p>{props.resultLocal}</p></div>
        <div className="Number"><p>-</p></div>
        <div className="Number"><p>{props.resultVisit}</p></div>
        <div className="Team"><img src={props.visitShield}  height="50" width="40"/></div>
     </div>
    </div>
)

export default Game