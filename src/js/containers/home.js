import React, { Component } from 'react'
import MainContainer from './mainContainer'
import Menu from './menu'
import Stadistics from './stadistics'
import Results from './results'
import Slider from './slider'
import GoalScore from './goalscore'
import Footer from './footer'

class Home extends Component {
    render(){
        return(
            <MainContainer>
                <Menu />
                <Results />
                <Slider />
                <Stadistics
                    teams={this.props.data.teams}
                />
                <GoalScore/>
                <Footer/>
            </MainContainer>
        )
    }
}

export default Home