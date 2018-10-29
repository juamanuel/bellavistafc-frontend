import React from 'react'
function Player(props) {
    return(
      <li className="Player">
        {props.name}
        {props.position}
      </li>
    )
  }
  
  export default Player