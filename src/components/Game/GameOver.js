import React from 'react'
import {BiReset} from 'react-icons/bi'

import { GameOverContainer, GameOverText, ResetButton } from './GridElements'


function GameOver(props) {

    return (
        <GameOverContainer>
            <GameOverText>
                
                {props.isWin ? "  You Win!!!  " : "  You Lose!!!  "}
                
                Score: {props.score}

            </GameOverText>

            <ResetButton
                onClick={() => {props.resetGame()} }
            >
                <BiReset size={"4vmin"}/>
            </ResetButton>
        </GameOverContainer>
    )
}

export default GameOver
