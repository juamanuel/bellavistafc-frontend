import React, {Component} from 'react'
import Photo from '../../images/slider/portada.png'
import '../../css/picture.scss'
function Picture(){
    return(
        <div className="Picture">
            <img src={Photo} alt="Bellavista FC"/>
        </div>
    )
}

export default Picture