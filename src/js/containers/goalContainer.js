import React from 'react'
import Goal from '../components/goal'
import Photo from '../../images/players/player.svg'

function GoalContainer () {
        return(
            <div className="GoalMainContainer">
               <Goal
                    name="Juan Manuel"
                    numberGoals="8"
                    avatar={Photo}
               />
                <Goal
                    name="José García"
                    numberGoals="6"
                    avatar={Photo}
               />
                <Goal
                    name="Eder Lara"
                    numberGoals="4"
                    avatar={Photo}
               />
                <Goal
                    name="Luis López"
                    numberGoals="2"
                    avatar={Photo}
               />
              
            </div>
        )
}

export default GoalContainer