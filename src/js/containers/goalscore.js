import React from 'react'
import PositionTableTitle from '../components/positiontabletitle'
import GoalContainer from '../containers/goalContainer'

function GoalScore () {
        return(
            <div>
                <PositionTableTitle
                    title="ESTADÍSTICAS"
                />
               <GoalContainer />
            </div>
               
        )
}

export default GoalScore