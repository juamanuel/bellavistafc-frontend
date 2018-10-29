import React, {Component} from 'react'
import logoBellavista from '../../images/logo.png'
import '../../css/logo.scss'
function Logo(){
    return(
        <div className="Logo">
            <img src={logoBellavista} alt="Bellavista FC" height="110" width="100"/>
        </div>
    )
}

export default Logo