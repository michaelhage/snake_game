import React, { Component } from 'react'

import { GameContainer } from './GeneralElements'
import Grid from "../components/Game/Grid"

export default class Game extends Component {
    
    
    render() {
        return (
            <GameContainer>
                <Grid />
            </GameContainer>
        )
    }
}
