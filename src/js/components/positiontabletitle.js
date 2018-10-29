import React from 'react'
import '../../css/positiontabletitle.scss'

function positiontabletitle (props){
    return(
        <div className="PositionTitle">
            <p className="textTitle">{props.title}</p>
        </div>
    )
}

export default positiontabletitle