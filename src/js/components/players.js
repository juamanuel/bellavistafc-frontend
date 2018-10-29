import React, {Component} from 'react'
import Player from './player.js'
import '../../css/players.scss'

class Players extends Component {
    render(){
      return(
        <ul className="Players">
          {this.props.data.players.map((playerData) => {
            return <Player {...playerData}/>
          })
        }
        </ul>
      )
    }
  }

  export default Players