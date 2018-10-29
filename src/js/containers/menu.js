import React,  {Component} from 'react'
import '../../css/Menu.scss'
import iconShield from '../../images/icons/shield.svg'
import iconUniform from '../../images/icons/uniform.svg'
import iconField from '../../images/icons/field.svg'

class Menu extends Component{
    render(){
        return(
            <div className="Menu">
                <ul>
                    <li><a href="#"><img className="icon" src={iconShield} alt="Club"/>CLUB</a></li>
                    <li><a href="#"><img className="icon" src={iconUniform} alt="Jugadores"/>JUGADORES</a></li>
                    <li><a href="#"><img className="icon" src={iconField} alt="Cancha"/>CANCHA</a></li>
                </ul>
            </div>
        )
    }
}

export default Menu