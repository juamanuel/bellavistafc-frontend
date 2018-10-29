import React, { Component } from 'react'
import '../../css/MainContainer.scss'

const MainContainer = (props) => (
    <div className="MainContainer">
        {props.children}
    </div>
)
 export default MainContainer