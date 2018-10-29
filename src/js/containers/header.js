import React,  {Component} from 'react'
import Logo from '../components/logo'
import Title from '../components/title'
import '../../css/Header.scss'

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <Logo/>
                <Title/>
            </div>
        )
    }
}

export default Header