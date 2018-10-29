import React, {Component} from 'react'
import Game from '../components/game'
import '../../css/gameContainer.scss'
import Shield0 from '../../images/shields/bellavista.png'
import Shield1 from '../../images/shields/shield1.png'
import Shield2 from '../../images/shields/shield2.png'
import Shield3 from '../../images/shields/shield3.png'

class Results extends Component {
    render(){
        return(
                <div className="gameContainer">
                    <Game
                        matchNumber="1"
                        localTeam="Bellavista"
                        localShield= {Shield0}
                        resultLocal="5"
                        visitTeam="Dptivo. Chive"
                        visitShield={Shield1}
                        resultVisit="2"
                    />
                       <Game
                        matchNumber="2"
                        localTeam="Estilo Regio"
                        localShield= {Shield2}
                        resultLocal="0"
                        visitTeam="Bellavista"
                        visitShield={Shield0}
                        resultVisit="3"
                    />
                       <Game
                        matchNumber="3"
                        localTeam="Bellavista"
                        localShield={Shield0}
                        resultLocal="1"
                        visitTeam="Amigos del Venado"
                        visitShield={Shield3}
                        resultVisit="1"
                    />
                </div>
        )
    }
}

export default Results